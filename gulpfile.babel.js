import gulp from 'gulp';
import gutil from 'gutil';
import clean from 'gulp-clean';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import UglifyJsPlugin from 'webpack-uglify-js-plugin';
import gulpif from 'gulp-if';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import { argv } from 'yargs';
import sass from 'gulp-sass';
import postCss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import sequence from 'run-sequence';
import path from 'path';
import htmlClean from 'gulp-htmlclean';
import browserSync from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import deepFreeze from 'deep-freeze';
browserSync.create();


const Paths = (() => {
  const distPath = './dist';
  const srcPath = './src';
  return deepFreeze({
    OUT: distPath,
    JS_ENTRY: `${srcPath}/main.js`,
    JS_SRC: `${srcPath}/**/*.{js,jsx}`,
    TESTS: `${srcPath}/**/__test__/*.js`,
    HTML_SRC: `${srcPath}/*.html`,
    CSS_SRC: `${srcPath}/scss/**/*.scss`,
    CSS_OUT: `${distPath}/css`,
    SASS_FOUNDATION: './node_modules/sass-foundation/',
    IMG_SRC: `${srcPath}/assets/images/*.*`,
    IMG_OUT: `${distPath}/assets/images/`,
    FONTS_SRC: 'node_modules/sass-foundation/assets/fonts/*',
    FONTS_OUT: `${distPath}/assets/fonts`
  });
})();

const Flags = deepFreeze({
  DEV: argv.dev,
  DEBUG: argv.debug,
  PRODUCTION: argv.production
});

gulp.task('clean', () => gulp.src(Paths.OUT, { read: false }).pipe(clean()));

gulp.task('build:js', () => {
  return gulp.src(Paths.JS_SRC)
    .pipe(gulpWebpack({
      devtool: Flags.DEBUG ? 'source-map' : undefined,
      entry: Paths.JS_ENTRY,
      output: { filename: 'bundle.js' },
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      plugins: Flags.PRODUCTION ? [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          minimize: false,
          compress: { warnings: false }
        })
      ] : [],
    }, webpack))
    .pipe(gulp.dest(Paths.OUT))
    .pipe(gulpif(Flags.DEV, browserSync.stream()));
});

gulp.task('build:css', () => {
  const postCssProcessors = [
    autoprefixer({
      browsers: [
        'last 2 versions',
        'ie 9-11',
        '> 5%'
      ],
      remove: false
    })
  ];
  const includePaths = [Paths.SASS_FOUNDATION];
  return gulp.src(Paths.CSS_SRC)
    .pipe(plumber())
    .pipe(gulpif(Flags.DEBUG, sourcemaps.init()))
    .pipe(sass({ includePaths }).on('error', gutil.log))
    .pipe(postCss(postCssProcessors))
    .pipe(gulpif(Flags.DEBUG, sourcemaps.write()))
    .pipe(gulpif(Flags.PRODUCTION, cleanCss({ advanced: false })))
    .pipe(gulp.dest(Paths.CSS_OUT))
    .pipe(gulpif(Flags.DEV, browserSync.stream()));
});

gulp.task('lint:js', () => gulp.src([Paths.JS_SRC, Paths.TESTS])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('lint:scss', () => gulp.src(Paths.CSS_SRC)
  .pipe(stylelint({
    reporters: [{ formatter: 'string', console: true }]
  }))
);

gulp.task('copy:images', () => {
  gulp
    .src(Paths.IMG_SRC)
    .pipe(gulp.dest(Paths.IMG_OUT));
  browserSync.reload();
  return gulp;
});

gulp.task('copy:html', () => gulp
  .src(Paths.HTML_SRC)
  .pipe(htmlClean())
  .pipe(gulp.dest(Paths.OUT))
  .pipe(gulpif(Flags.DEV, browserSync.stream()))
);

gulp.task('copy:fonts', () => gulp
  .src(Paths.FONTS_SRC)
  .pipe(gulp.dest(Paths.FONTS_OUT))
);

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: Paths.OUT,
      middleware: [
        modRewrite(['!\\.\\w+$ /_index.html [L]'])
      ]
    },
    logFileChanges: false
  });
});

gulp.task('bundle', ['build:css', 'build:js'], () => {
  if (Flags.DEV) {
    gulp.watch(Paths.JS_SRC, ['build:js']);
    gulp.watch(Paths.CSS_SRC, ['build:css']);
  }
});

gulp.task('copy', ['copy:html', 'copy:images', 'copy:fonts'], () => {
  if (Flags.DEV) {
    gulp.watch(Paths.HTML_SRC, ['copy:html']);
    gulp.watch(Paths.IMG_SRC, ['copy:images']);
  }
});

gulp.task('build', () => sequence('clean', 'copy', 'bundle'));

gulp.task('serve', () => sequence('build', 'browserSync'));

gulp.task('lint', ['lint:js', 'lint:scss']);

gulp.task('default', ['serve']);

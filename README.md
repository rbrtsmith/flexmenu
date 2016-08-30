# Flex Menu
A responsive navigation system built in React using Redux.

##Demo
[http://rbrtsmith.com/flexmenu/dist/](http://rbrtsmith.com/flexmenu/dist/)

##Getting started
```
npm install
```

Then:
###Dev mode
```
npm start
```
Runs Gulp in dev mode where gulp will watch for changes to the source files (`src/`) and sync them to 
the browser via BrowserSync.  Output files will not be minified.

###Debug mode
```
npm start-debug
```
As above but includes sourcemaps.  This is not included by default in dev mode to speed up compilation.

###Production mode
```
npm build
```
Runs Gulp in production mode - all output files are minified and uses Production version of React.

##Linting
```
npm run lint
```
Run the JavaScript and Sass linters. These are not automatically run in *develop* or *production*
modes as they slow down the compilation process.

##Testing
```
npm test:unit
```
Run unit tests with Ava
```
npm test:unit:watch
```
Run unit tests with Ava and watch for changes
```
npm test:coverage
```
Run unit tests with code coverage


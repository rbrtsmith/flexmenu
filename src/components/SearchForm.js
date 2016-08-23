import React from 'react';

import SearchIcon from '../icons/SearchIcon';

const SearchForm = () => (
  <form className="c-search-form">
    <input type="text" className="c-search-form__input" placeholder="Search" />
    <button type="submit" className="c-search-form__submit">
      <SearchIcon />
    </button>
  </form>
);

export default SearchForm;

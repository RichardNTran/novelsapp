import React from 'react';
import Search from '../Lib/Search';

const SearchBarLocal = ({ 
  items, 
  handleResults, 
  placeholder, 
  onClear, 
  handleChangeText, 
  heightAdjust }) => {
  return (
    <Search
      data={items}
      handleResults={handleResults}
      showOnLoad
      focusOnLayout={false}
      placeholder={placeholder}
      onX={onClear}
      handleChangeText={handleChangeText}
      allDataOnEmptySearch
      heightAdjust={heightAdjust}
      hideBack
    />

  );
};

export { SearchBarLocal };

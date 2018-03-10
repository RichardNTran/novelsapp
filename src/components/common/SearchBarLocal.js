import React from 'react';
import { View, Platform } from 'react-native';
import Search from '../Lib/Search';

const SearchBarLocal = ({ items, handleResults, placeholder, onClear, handleChangeText, heightAdjust }) => {

  return (
    <Search
      data={items}
      handleResults={handleResults}
      showOnLoad
      placeholder={placeholder}
      onX={onClear}
      handleChangeText={handleChangeText}
      allDataOnEmptySearch
      heightAdjust={heightAdjust}
    />

  );
};

export { SearchBarLocal };

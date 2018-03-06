import React from 'react';
import { View } from 'react-native';
// import SearchBar from 'react-native-searchbar';
import Search from '../Lib/Search';

const SearchBarLocal = ({ items, handleResults, placeholder, onClear, handleChangeText }) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Search
        data={items}
        handleResults={handleResults}
        showOnLoad
        placeholder={placeholder}
        onX={onClear}
        handleChangeText={handleChangeText}
        allDataOnEmptySearch
      />
    </View>
  );
};
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
    height: 65
  }
};

export { SearchBarLocal };

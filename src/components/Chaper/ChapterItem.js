import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ChapterItem extends Component {
  render() {
    const { index, title } = this.props.chapter.item;
    return (
      <View>
        <Text>{index}{title}</Text>
      </View>
    );
  }
}

export default ChapterItem;

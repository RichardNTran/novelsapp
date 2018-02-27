import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection, ImageThumnail } from './common';

class ListItem extends Component {

  onRowPress() {
  }

  render() {
    const { name, uri } = this.props.novel.item;
    console.log(this.props.novel);
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
            <ImageThumnail
              uri={uri}
              height={200}
              width={200}
            />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;

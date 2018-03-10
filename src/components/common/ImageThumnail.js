import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

class ImageThumnail extends Component {
  renderImage() {
    const { uri, imagePath } = this.props;
    if (typeof (imagePath) !== 'undefined' && imagePath !== '') {
      return (
        <TouchableOpacity onPress={this.props.openPicker}>
          <Image
            style={styles.thumnaiSltyle}
            source={{ uri: imagePath, isStatic: false }}
          />
        </TouchableOpacity>);
    }
    if (typeof (uri) !== 'undefined' && uri !== '') {
      return (
        <TouchableOpacity
          onPress={this.props.openPicker}
          disabled={this.props.disabled}
        >
          <Image
            onPress={this.props.openPicker}
            style={styles.thumnaiSltyle}
            source={{ uri, isStatic: false }}
          />
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      this.renderImage()
    );
  }
}
const styles = {
  thumnaiSltyle: {
    height: 150,
    width: 100
  }
};


export { ImageThumnail };

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { novelUpdate } from '../actions';
import { CardSection, Input, ImageThumnail } from './common';

class NovelForm extends PureComponent {

  openPicker() {
    ImagePicker.openPicker({
      width: 100,
      height: 200,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {
      console.log(image);
      this.props.novelUpdate({ prop: 'imagePath', value: image.path });
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name of novel"
            value={this.props.name}
            onChangeText={value => this.props.novelUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder=" description"
            value={this.props.description}
            onChangeText={value => this.props.novelUpdate({ prop: 'description', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Author"
            placeholder="author name"
            value={this.props.author}
            onChangeText={value => this.props.novelUpdate({ prop: 'author', value })}
          />
        </CardSection>

        <CardSection style={styles.thumnaiSltyle}>
          <ImageThumnail
            {...this.props}
            openPicker={this.openPicker.bind(this)}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, author, uri, imagePath } = state.novelForm;
  return { name, description, author, uri, imagePath };
};

const styles = {
  thumnaiSltyle: {
    justifyContent: 'center'
  }
};

export default connect(mapStateToProps, { novelUpdate })(NovelForm);

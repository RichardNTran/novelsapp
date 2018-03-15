import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection } from '../common';
import { chapterUpdate } from '../../actions';

class ChapterForm extends Component {

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Chapter"
            placeholder="input chapter index"
            value={this.props.index}
            keyboardType='numeric'
            onChangeText={value => this.props.chapterUpdate({ prop: 'index', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Chapter title"
            placeholder="input chapter title"
            value={this.props.title}
            onChangeText={value => this.props.chapterUpdate({ prop: 'title', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Content"
            placeholder="chapter content"
            value={this.props.content}
            onChangeText={value => this.props.chapterUpdate({ prop: 'content', value })}
          />
        </CardSection>
      </View>
    );
  }
}
const mapStateToProp = (state) => {
  const { index, title, content } = state.chapterForm;
  return { index, title, content };
};

export default connect(mapStateToProp, { chapterUpdate })(ChapterForm);

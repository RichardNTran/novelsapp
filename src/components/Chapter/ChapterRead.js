import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';
import { Card, CardSection } from '../common';
import { nextChapter, backChapter } from '../../actions';

class ChapterRead extends Component {

  render() {
    const { content } = this.props;
    return (
      <Card>
        <CardSection>
          <ScrollView>
            <HTML html={content} imagesMaxWidth={Dimensions.get('window').width} />
          </ScrollView>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const chapter = _.map(state.chapterList.chapter, (val, uid) => {
    return { ...val, uid };
  });
  const { index, title, content } = chapter[0];
  return { index, title, content };
};

export default connect(mapStateToProps, { nextChapter, backChapter })(ChapterRead);

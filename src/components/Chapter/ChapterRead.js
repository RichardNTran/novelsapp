import _ from 'lodash';
import React, { PureComponent } from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';
import { Card, CardSection, IconButton } from '../common';
import { nextChapter, backChapter } from '../../actions';
import { imageResouces } from '../../resouces/index';

class ChapterRead extends PureComponent {

  onBackChapter() {
    const { currentNovel, index } = this.props;
    this.props.backChapter({ novelUid: currentNovel.uid, chapterIndex: index });
    this.refs.scrollView.scrollTo({ x: 0, y: 0, animated: false });
  }

  onNextChapter() {
    const { currentNovel, index } = this.props;
    this.props.nextChapter({ novelUid: currentNovel.uid, chapterIndex: index });
    this.refs.scrollView.scrollTo({ x: 0, y: 0, animated: false });
  }

  render() {
    const { index, content, haveLastChapter, haveNextChapter } = this.props;
    return (
      <Card>
        <CardSection style={styles.indexPagingStyle}>
          <IconButton
            isEnable={haveLastChapter}
            iconSource={imageResouces.icons.back}
            onPress={this.onBackChapter.bind(this)}
          />
          <Text>{index}</Text>
          <IconButton
            isEnable={haveNextChapter}
            iconSource={imageResouces.icons.forward}
            onPress={this.onNextChapter.bind(this)}
          />
        </CardSection>
        <ScrollView ref='scrollView'>
          <HTML html={content} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
      </Card>
    );
  }
}

const styles = {
  indexPagingStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};


const mapStateToProps = (state) => {
  const chapter = _.map(state.chapterList.chapter, (val, uid) => {
    return { ...val, uid };
  });
  const currentNovel = state.chapterList.currentNovel;
  const { index, title, content, isLast } = chapter[0];
  const haveNextChapter = !isLast;
  const haveLastChapter = !(index === 1);
  return { index, title, content, haveNextChapter, haveLastChapter, currentNovel };
};

export default connect(mapStateToProps, { nextChapter, backChapter })(ChapterRead);

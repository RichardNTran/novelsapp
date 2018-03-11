import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { Card, CardSection, ImageThumnail } from '../common';
import { chaptersNovelUpdate, chaptersFetch } from '../../actions';
import ChapterItem from './ChapterItem';

class ChapterList extends Component {

  componentWillMount() {
    this.props.chaptersFetch({ currentNovel: this.props.currentNovel });
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ chapters }) {
    this.dataSource = chapters;
  }

  renderItem(chapter) {
    return <ChapterItem chapter={chapter} />;
  }

  render() {
    const { name, author, description, uri } = this.props.currentNovel;
    return (
      <Card>
        <CardSection style={styles.rowStyle}>
          <ImageThumnail
            uri={uri}
            height={100}
            width={50}
            style={styles.imageStyle}
          />

          <View
            style={styles.contentStyle}
          >
            <Text style={styles.nameStyle}>
              {name}
            </Text>
            <Text style={styles.authorStyle}>
              {author}
            </Text>
            <Text
              style={styles.descriptionStyle}
              numberOfLines={3}
            >
              {description}
            </Text>
          </View>
        </CardSection>
        <FlatList
          numColumns={1}
          data={this.dataSource}
          renderItem={this.renderItem}
        />
        {/* <CardSection style={styles.chapterListStyle}>
          <Text> list chapter</Text>
        </CardSection> */}
      </Card>
    );
  }
}

const styles = {
  // rowStyle: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
  imageStyle: {
    flex: 3,
    flexDirection: 'column'
  },
  contentStyle: {
    flex: 7,
    flexDirection: 'column'
  },
  nameStyle: {
    fontSize: 24,
    paddingLeft: 15,
    fontWeight: 'bold'
  },
  authorStyle: {
    fontSize: 18,
    fontStyle: 'italic',
    paddingLeft: 15
  },
  descriptionStyle: {
    fontSize: 16,
    paddingLeft: 15
  },
  chapterListStyle: {
    flex: 1,
    flexDirection: 'column'
  }
};

const mapStateToProp = (state) => {
  const currentNovel = state.chapterList.currentNovel;
  const chapters = _.map(state.chapterList.chapters, (val, uid) => {
    return { ...val, uid };
  })
  return { currentNovel, chapters };

};

export default connect(mapStateToProp, { chaptersNovelUpdate, chaptersFetch })(ChapterList);

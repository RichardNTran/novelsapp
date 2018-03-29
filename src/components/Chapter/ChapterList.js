import _ from 'lodash';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { Card, CardSection, ImageThumnail, Dropdown } from '../common';
import { chaptersNovelUpdate, chaptersFetch } from '../../actions';
import ChapterItem from './ChapterItem';

class ChapterList extends PureComponent {

  componentWillMount() {
    this.props.chaptersFetch({ currentNovel: this.props.currentNovel });
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onChangeText(value, index) {
    this.props.chaptersFetch({ currentNovel: this.props.currentNovel, indexPage: index });
  }

  createDataSource({ chapters }) {
    this.dataSource = chapters;
  }

  renderItem(chapter, currentNovel) {
    return <ChapterItem chapter={chapter} novelUid={currentNovel.uid} />;
  }

  render() {
    const { name, author, description, uri } = this.props.currentNovel;
    const { pagingList, defaultPaging } = this.props;
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
        <CardSection style={{ justifyContent: 'center' }}>
          <Dropdown
            value={defaultPaging}
            onChangeText={this.onChangeText.bind(this)}
            label='Chương'
            data={pagingList}
            containerStyle={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          />
        </CardSection>
        <FlatList
          numColumns={1}
          data={this.dataSource}
          renderItem={item => this.renderItem(item, this.props.currentNovel)}

        />

      </Card>
    );
  }
}

const styles = {
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
const generaterPagingData = (totalChapters, pageSize) => {
  const pagingData = [];
  const count = totalChapters / pageSize;
  for (let i = 0; i <= count; i++) {
    const startAt = i === 0 ? 1 : (pageSize * i) + 1;
    const endAt = totalChapters > pageSize * (i + 1) ? pageSize * (i + 1) : totalChapters;
    pagingData.push({ value: `${startAt}-${endAt}`, label: `Chương: ${startAt}-${endAt}` });
  }
  console.log(pagingData);
  return pagingData;
};

const mapStateToProp = (state) => {
  const currentNovel = state.chapterList.currentNovel;
  const chapters = _.map(state.chapterList.chapters, (val, uid) => {
    return { ...val, uid };
  });
  const pagingList = generaterPagingData(currentNovel.totalChapters, 10);
  const defaultPaging = pagingList[0].value;
  return { currentNovel, chapters, pagingList, defaultPaging };
};

export default connect(mapStateToProp, { chaptersNovelUpdate, chaptersFetch })(ChapterList);

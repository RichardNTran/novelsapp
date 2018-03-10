import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, ImageThumnail } from '../common';
import { chapterUpdate } from '../../actions';

class ChapterList extends Component {
  componentWillReceivePropscallback(){
    console.log(this.state);
    console.log(this.props);
  }
  componentWillMount() {
    console.log(this.props);
    _.each(this.props.chapterForm, (value, prop) => {
      this.props.chapterUpdate({ prop, value });
    });
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
  const { currentNovel } = state.chapterForm;
  return { currentNovel };
};

export default connect(mapStateToProp, { chapterUpdate })(ChapterList);

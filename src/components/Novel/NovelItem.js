import React, { PureComponent } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { CardSection, ImageThumnail } from '../common';
import { loadChapterList } from '../../actions';

class ListItem extends PureComponent {

  onRowPress() {
    // Actions.chapterList({ chapterList: { currentNovel: this.props.novel.item } });
    this.props.loadChapterList({ currentNovel: this.props.novel.item });
  }

  render() {
    const { name, uri, description, author } = this.props.novel.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.rowStyle}>
            <ImageThumnail
              uri={uri}
              height={200}
              width={100}
              style={styles.imageStyle}
              disabled
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
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  rowStyle: {
    flex: 1,
    flexDirection: 'row'
  },
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
  }
};

export default connect(null, { loadChapterList })(ListItem);

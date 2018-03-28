import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import { loadChapter } from '../../actions';

class ChapterItem extends PureComponent {
  chapterPress() {
    this.props.loadChapter({ 
      novelUid: this.props.novelUid, 
      chapterIndex: this.props.chapter.item.index });
  }

  render() {
    const { index, title } = this.props.chapter.item;
    return (
      <CardSection style={styles.container}>
        <TouchableOpacity onPress={this.chapterPress.bind(this)} >
          <View>
            <Text>Chương {index}: {title}</Text>
          </View>
        </TouchableOpacity>
      </CardSection>
    );
  }
}
const styles = {
  container: {
    height: 40
  }
};


export default connect(null, { loadChapter })(ChapterItem);

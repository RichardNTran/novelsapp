import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../common';
import ChapterForm from './ChapterForm';
import { chapterCreate } from '../../actions';

class ChapterCreate extends PureComponent {

  onCreateChapterPress() {
    const { index, title, content, currentNovel } = this.props;
    this.props.chapterCreate({ index, title, content, currentNovel });
  }

  render() {
    return (
      <Card>
        <ChapterForm {...this.props} />
        <CardSection>
          <Button onPress={this.onCreateChapterPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProp = (state) => {
  const { index, title, content } = state.chapterForm;
  const currentNovel = state.chapterForm.currentNovel;
  return { index, title, content, currentNovel };
};

export default connect(mapStateToProp, { chapterCreate })(ChapterCreate);


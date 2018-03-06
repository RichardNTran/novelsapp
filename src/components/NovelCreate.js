import React, { Component } from 'react';
import { connect } from 'react-redux';
import { novelUpdate, novelCreate } from '../actions';
import { Button, Card, CardSection } from './common';
import NovelForm from './NovelForm';

class NovelCreate extends Component {

  onButtonPress() {
    const { name, author, description, imagePath } = this.props;
    this.props.novelCreate({ name, author, description, imagePath });
  }

  render() {
    return (
      <Card>
        <NovelForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, uri, author, imagePath } = state.novelForm;
  return { name, description, uri, author, imagePath };
};

export default connect(mapStateToProps, { novelUpdate, novelCreate })(NovelCreate);

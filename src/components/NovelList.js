import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { novelsFetch } from '../actions';
import NovelItem from './NovelItem';

class NovelList extends Component {

  componentWillMount() {
    this.props.novelsFetch();
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ novels }) {
    this.dataSource = novels;
  }

  renderItem(novel) {
    return <NovelItem novel={novel} />;
  }

  render() {
    return (
      <FlatList
        numColumns={2}
        data={this.dataSource}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const novels = _.map(state.novels, (val, uid) => {
    return { ...val, uid };
  });
  return { novels };
};

export default connect(mapStateToProps, { novelsFetch })(NovelList);

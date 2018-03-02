import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { novelsFetch, novelsFetchLocal } from '../actions';
import NovelItem from './NovelItem';
import { SearchBarLocal, Card, CardSection } from './common';

class NovelList extends Component {

  componentWillMount() {
    this.props.novelsFetch();
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  getValue(value) {
    console.log(value);
  }

  handleChangeText(input) {
    return input.replace(/^\s+|\s+$/g, '');
  }

  createDataSource({ novelsLocal }) {
    this.dataSource = novelsLocal;
  }

  handleResults(results) {
    this.props.novelsFetchLocal(results);
  }

  renderItem(novel) {
    return <NovelItem novel={novel} />;
  }

  render() {
    return (
      <View>
        <SearchBarLocal
          placeholder='search novel name'
          getValue={this.getValue.bind(this)}
          items={this.props.novels}
          handleResults={results => this.handleResults(results)}
          handleChangeText={this.handleChangeText.bind(this)}
        />
        <Card >
          <CardSection>
            <FlatList
              numColumns={1}
              data={this.dataSource}
              renderItem={this.renderItem}
            />
          </CardSection>
        </Card >
      </View >
    );
  }
}

const mapStateToProps = (state) => {
  const novels = _.map(state.listData.novels, (val, uid) => {
    return { ...val, uid };
  });
  const novelsLocal = _.map(state.listData.novelsLocal, (val, uid) => {
    return { ...val, uid };
  });
  return { novels, novelsLocal };
};

export default connect(mapStateToProps, { novelsFetch, novelsFetchLocal })(NovelList);

import _ from 'lodash';
import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { novelsFetch, novelsFetchMore, novelsFetchLocal } from '../../actions';
import NovelItem from './NovelItem';
import { SearchBarLocal } from '../common';

class NovelList extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentWillMount() {
    this.props.novelsFetch({ indexPage: this.props.indexPage });
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
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

  handleLoadMore() {
    this.props.novelsFetchMore({ indexPage: (this.props.indexPage) });
  }

  renderItem(novel) {
    return <NovelItem novel={novel} />;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <SearchBarLocal
          style={styles.searchBarStyle}
          placeholder='search novel name'
          items={this.props.novels}
          handleResults={results => this.handleResults(results)}
          handleChangeText={this.handleChangeText.bind(this)}
          heightAdjust={-10}
        />
        <View style={styles.listNovelStyle}>
          <FlatList
            numColumns={1}
            data={this.dataSource}
            renderItem={this.renderItem}
            onEndReached={this.handleLoadMore.bind(this)}
       
          />
        </View>
      </View >
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  searchBarStyle: {
    flex: 1
  },
  listNovelStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 62
  }
};

const mapStateToProps = (state) => {
  const novels = _.map(state.listData.novels, (val, uid) => {
    return { ...val, uid };
  });
  const indexPage = state.listData.indexPage;
  let novelsLocal = {};
  if (state.listData.novelsLocal === null) {
    novelsLocal = novels;
  } else {
    novelsLocal = state.listData.novelsLocal;
  }
  return { novels, novelsLocal, indexPage };
};

export default connect(mapStateToProps, {
  novelsFetch, novelsFetchMore, novelsFetchLocal
})(NovelList);

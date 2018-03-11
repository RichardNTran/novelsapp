import React from 'react';
import { Scene, Router, Tabs, Stack, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import LoginForm from './components/LoginForm';
import NovelList from './components/NovelList';
import NovelCreate from './components/NovelCreate';
import DefaultProps from './constants/navigation';
import NovelCurrent from './components/NovelCurrent';
import ChapterList from './components/Chaper/ChapterList';
import ChapterCreate from './components/Chaper/ChapterCreate';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navBar}
    >
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
      >
        <Stack
          initial
          key="mainTab"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene
            hideNavBar
            rightTitle="Add"
            onRight={() => Actions.novelCreate()}
            key="novelList"
            component={NovelList}
            title="List novel"
          />
          <Scene
            key="novelCreate"
            component={NovelCreate}
            title="Create novel"
          />
          <Scene
            key="chapterList"
            title="Novel Chapters"
            component={ChapterList}
          />
          <Scene key="chapterCreate" component={ChapterCreate} title="Create Chapter" />
        </Stack>

        <Stack
          navBarBackgroundColor= 'blue'
          key="currentTab"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
        >
          <Scene
            key="currentNovel"
            title="Current Novels"
            component={NovelCurrent}
          />
        </Stack>

        <Stack
          key="authTab"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Stack>

      </Tabs>


    </Router>
  );
};

const styles = {
  navBar: {
    // backgroundColor:'#0D47A1',
  }
}
export default RouterComponent;

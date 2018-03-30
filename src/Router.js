import React from 'react';
import { Scene, Router, Tabs, Stack, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import LoginForm from './components/Auth/LoginForm';
import NovelList from './components/Novel/NovelList';
import NovelCreate from './components/Novel/NovelCreate';
import DefaultProps from './constants/navigation';
import NovelCurrent from './components/Novel/NovelCurrent';
import ChapterList from './components/Chapter/ChapterList';
import ChapterCreate from './components/Chapter/ChapterCreate';
import ChapterRead from './components/Chapter/ChapterRead';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navBar}
      tabBarPosition='bottom'
     
    >
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        activeBackgroundColor="white"
        inactiveBackgroundColor="rgba(236, 213, 255, 0.5)"
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
          <Scene key="chapterRead" component={ChapterRead} title="Reading" />
        </Stack>
          
        <Stack
          navBarBackgroundColor='blue'
          key="currentTab"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
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
          tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
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
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ECD5FF'
  }
};
export default RouterComponent;

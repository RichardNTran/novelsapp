import React from 'react';
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import LoginForm from './components/LoginForm';
import NovelList from './components/NovelList';
import DefaultProps from './constants/navigation';

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="root" hideNavBar>
        <Tabs
          key="tabbar"
          swipeEnabled
          type="replace"
          showLabel={false}
        >
          <Stack
            key="mainTab"
            hideNavBar
            icon={() => <Icon name="list" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene 
              key="main"
              hideNavBar
            >
              <Scene key="novelList" component={NovelList} title="List novel" />
            </Scene>
          </Stack>

          <Stack
            key="NovelTab"
            hideNavBar
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="curentNovel" component={NovelList} title="Curent novel" />
          </Stack>

          <Stack
            key="authTab"
            initial
            hideNavBar
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
          </Stack>

        </Tabs>
      </Scene>

    </Router>
  );
};

export default RouterComponent;

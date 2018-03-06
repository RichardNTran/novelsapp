import React from 'react';
import { Scene, Router, Tabs, Stack, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import LoginForm from './components/LoginForm';
import NovelList from './components/NovelList';
import NovelCreate from './components/NovelCreate';
import DefaultProps from './constants/navigation';
import NovelCurrent from './components/NovelCurrent';

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
            <Scene key="main">
              <Scene
                hideNavBar
                rightTitle="Add"
                onRight={() => Actions.novelCreate()}
                key="novel List"
                component={NovelList}
                title="List novel"
              />
              <Scene
                key="novelCreate"
                component={NovelCreate}
                title="Create novel"
              />
            </Scene>
          </Stack>

          <Stack
            key="novelTab"
            hideNavBar
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="current">
              <Scene key="curentNovel" component={NovelCurrent} title="Curent novel" />
            </Scene>
          </Stack>

          <Stack
            key="authTab"
            initial
            hideNavBar
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="auth">
              <Scene
                key="login"
                component={LoginForm}
                title="Please Login"
              />
            </Scene>
          </Stack>

        </Tabs>
      </Scene>

    </Router>
  );
};

export default RouterComponent;

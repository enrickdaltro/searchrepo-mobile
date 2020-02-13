import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from './pages/Main/index';
import User from './pages/User/Index';
import Repository from './pages/Repository/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    },
  ),
);

export default Routes;

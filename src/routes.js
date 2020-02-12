import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from './pages/Main/index';
import User from './pages/User/Index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    },
  ),
);

export default Routes;

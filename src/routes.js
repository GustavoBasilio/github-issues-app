import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

// Creating the Routes and to Header
const Routes = createAppContainer(
  createStackNavigator({
    Repositories,
    Issues,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      title: 'Git Issues',
    },
  }),
);

export default Routes;

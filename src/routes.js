import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation';

import Repositories from './pages/Repositories';

const Routes = createAppContainer(
    createStackNavigator({
        Repositories
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitleStyle: {
                color: "green"
            },
            headerTitle: <Text>Git Issues</Text>,
            headerStyle: {
                backgroundColor: '#FFF',
            }
        }
    })
);

export default Routes;
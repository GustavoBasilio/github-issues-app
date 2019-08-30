/**
 * @format
 */

import tron from './ReactotronConfig';

if(__DEV__) {
    tron().then(() => console.log('Reactotron Configured'));
}

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

export default AppRegistry.registerComponent(appName, () => App);

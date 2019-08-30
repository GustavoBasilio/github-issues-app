import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import { white } from './constants/colors';

// Main Component
const Main = () => (
  <>
    { /* Fix to set status bar white in Android  */ }
    <StatusBar barStyle="dark-content" backgroundColor={white} />
    <Routes />
  </>
);

export default Main;

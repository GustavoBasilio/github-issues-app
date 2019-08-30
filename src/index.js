import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

import { white } from './constants/colors'; 

 const Main = () => {

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={white} />
            <Routes />
        </>
    );

}

export default Main;
import Reactotron from 'reactotron-react-native';

Reactotron
    .configure()
    .useReactNative()
    .connect({
        server: '10.0.3.2',
        port: '9090',
        enabled: true
    });
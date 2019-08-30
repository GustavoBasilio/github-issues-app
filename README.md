# GitHub Issues

Register and list repositories from GitHub in a format "owner/name" to view their issues.

## Getting started

### Prerequisites

- Android SDK
- Java
- Phone Emulator (Genymotion) or physical aindroid phone

### Installing

Install the node packeges

`npm install`

Install react-native CLI globally

`sudo npm install -g react-native`

Start react native

`react-native start`

In another terminal after connecting a phone or running in the emulator

`react-native run-android`

### Running tests

> TODO: Jest configuration is done, but the application need unit testing to get 95% coverage.

Install *jest* globally

`sudo npm install -g jest`

Run tests

`npm run test` or `jest`


### Running lint

> TODO: Fix lint rules to ignore no unused vars rule when importing *React* .

Install *eslint* globally

`sudo npm install -g eslint`

Run tests

`npm run lint` or `eslint .`

## Build

### Using

- React Native
- React Navigation
- React Vector Icons
- Async Storage

### Production

To build the *APK* run this command inside android folder

`./gradlew assembleRelease`

The build will be availiabe in **android/app/build/outputs/apk/release**

## Authors

Gustavo Belmonte de Paula Basilio
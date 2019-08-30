/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import Main from '../src/index';

import 'jest-styled-components';


it('renders correctly', () => {
  const main = renderer.create(<Main />).toJSON();
  expect(main).toMatchSnapshot();
});

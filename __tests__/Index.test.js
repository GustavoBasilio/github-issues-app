/**
 * @format
 */

import 'react-native';
import React from 'react';
import Main from '../src/index';

import 'jest-styled-components'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const main = renderer.create(<Main />).toJSON();
  expect(main).toMatchSnapshot();
});

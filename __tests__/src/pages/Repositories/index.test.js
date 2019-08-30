/**
 * @format
 */

import 'react-native';
import React from 'react';
import Repositories from '../../../../src/pages/Repositories/index';

import 'jest-styled-components'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const comp = renderer.create(<Repositories />).toJSON();
  expect(comp).toMatchSnapshot();
});

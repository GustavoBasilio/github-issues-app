/**
 * @format
 */

import 'react-native';
import React from 'react';
import Repository from '../../../../src/components/Repository/index';

import 'jest-styled-components'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const comp = renderer.create(<Repository data={{
    "id": "",
    "name": "",
    "owner": "",
    "avatar": ""
}
} />).toJSON();
  expect(comp).toMatchSnapshot();
});

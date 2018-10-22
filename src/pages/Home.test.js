import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from './Home.js';

test('should shallow correctrly', () => {
  const onLoad = jest.fn();
  const loadStack = jest.fn();

  const component = renderer.create(<Home onLoad={onLoad} loadStack={loadStack}/>);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

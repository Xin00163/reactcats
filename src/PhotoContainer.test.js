import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PhotoContainer from './PhotoContainer';

it('renders and matches our snapshot', () => {
  const component = renderer.create(
    <PhotoContainer />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

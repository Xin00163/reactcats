import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PhotoContainer from './PhotoContainer';
import images from './images';

it('renders and matches our snapshot', () => {
  const component = renderer.create(
    <PhotoContainer image={images['cat1']} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

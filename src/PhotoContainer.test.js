import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PhotoContainer from './PhotoContainer';
import photoCardsData from './photoCardsData.json'


it('renders and matches our snapshot', () => {
  const component = renderer.create(
    <PhotoContainer data={photoCardsData[0]} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

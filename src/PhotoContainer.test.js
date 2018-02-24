import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import PhotoContainer from './PhotoContainer';
import photoCardsData from './photoCardsData.json'

describe('PhotoContainer', () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <PhotoContainer data={photoCardsData[0]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the initial like count', () => {
    const wrapper = mount(<PhotoContainer data={photoCardsData[0]} />);
    expect(wrapper.find('.Likes').text()).toEqual('53');
  });
})

describe('Liked state', () => {
  it('should have class "fa-heart-o" if liked state is false', () => {
      const wrapper = mount(<PhotoContainer data={photoCardsData[1]} />);
      expect(wrapper.state('liked')).toEqual(false);
      expect(wrapper.find('.Likes').hasClass('fa-heart-o'));
    });

  it('should have class "fa-heart" if liked state is true', () => {
      const wrapper = mount(<PhotoContainer data={photoCardsData[0]} />);
      expect(wrapper.state('liked')).toEqual(true);
      expect(wrapper.find('.Likes').hasClass('fa-heart'));
    });
});

describe('LikeClick', () => {
  it('clicking on unliked post, update the likes count and change the state to like', () => {
      const wrapper = mount(<PhotoContainer data={photoCardsData[1]} />);
      wrapper.find('#Click-like').simulate('click')
      expect(wrapper.state('liked')).toEqual(true);
      expect(wrapper.find('.Likes').text()).toEqual('674');
    });

  it('clicking on liked post, do not update the likes count or change the state', () => {
      const wrapper = mount(<PhotoContainer data={photoCardsData[0]} />);
      wrapper.find('#Click-like').simulate('click')
      expect(wrapper.state('liked')).toEqual(true);
      expect(wrapper.find('.Likes').text()).toEqual('53');
  });
});

import React from 'react';
import SideBar from './SideBar';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

function setup() {
  const props = {
    recipes: {
      1: {name: 'Test 1'},
      2: {name: 'Test 2'}
    },
    match: {
      params: {
        filter: 'recipes'
      }
    }
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <SideBar {...props}/>
    </MemoryRouter>
  );

  return {
    props,
    wrapper
  };
}

describe('components', () => {
  describe('SideBar', () => {
    it('should render properly', () => {
      const { props, wrapper } = setup();
      expect(wrapper.find('div').hasClass('app-sidebar')).toBe(true);
      expect(wrapper.find('div').children()).toHaveLength(Object.keys(props.recipes).length);
    });
  });
});

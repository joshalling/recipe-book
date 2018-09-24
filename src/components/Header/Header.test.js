import React from 'react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

function setup() {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Header />
    </MemoryRouter>
  );

  return {
    wrapper
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render properly', () => {
      const { wrapper } = setup();
      expect(wrapper.find('header').hasClass('app-header')).toBe(true);
      expect(wrapper.find('h1').hasClass('app-title')).toBe(true);
      expect(wrapper.find('h1').text()).toBe('Recipe Book');
    });
  });
});

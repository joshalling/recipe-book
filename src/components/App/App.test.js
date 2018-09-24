import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

function setup() {
  const props = {
    dispatch: jest.fn()
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App {...props}/>
    </MemoryRouter>
  );

  return {
    wrapper
  };
}

describe('components', () => {
  describe('App', () => {
    it('should render properly', () => {
      const { wrapper } = setup();
      expect(wrapper.find('div').first().hasClass('app')).toBe(true);
    });
  });
});

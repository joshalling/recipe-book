import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const props = {
    recipes: {},
    match: {
      params: {}
    }
  };

  ReactDOM.render(
    <MemoryRouter initialEntries={[ '/' ]}>
      <SideBar {...props}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

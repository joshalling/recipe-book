import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const activeStyle = {
  background: 'var(--light)'
}

const SideBar = ({recipes, match: { params }}) => (
  <div className="app-sidebar">
    {Object.keys(recipes).map(key => <NavLink key={key} to={`/${params.filter}/${key}`} activeStyle={activeStyle}>{recipes[key].name}</NavLink>)}
  </div>
);

SideBar.propTypes = {
  recipes: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string
    })
  })
}

export default SideBar;

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
};

export default withRouter(connect(mapStateToProps)(SideBar))

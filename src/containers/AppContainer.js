import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App/App';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
};

export default withRouter(connect(mapStateToProps)(App))

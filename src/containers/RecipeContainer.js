import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Recipe from "../components/Recipe/Recipe";

const mapStateToProps = state => {
    return {
        recipes: state.recipes.recipes
    };
};

export default withRouter(connect(mapStateToProps)(Recipe));

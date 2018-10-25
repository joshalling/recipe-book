import React, { Component } from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";
import RecipeContainer from "../../containers/RecipeContainer";
import SideBarContainer from "../../containers/SideBarContainer";
import Header from "../Header/Header";
import { fetchRecipes } from "../../actions/recipesActions";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <Route
                        path="/:filter(recipes|favorites)"
                        component={SideBarContainer}
                    />
                    <Route
                        path="/:filter(recipes|favorites)/:recipeId(\d+)"
                        component={RecipeContainer}
                    />
                </main>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default App;

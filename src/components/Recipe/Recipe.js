import React from "react";
import PropTypes from "prop-types";

const Recipe = ({ recipes, match: { params } }) => (
    <div className="recipe-container">{params.recipeId}</div>
);

Recipe.propTypes = {
    recipes: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
            instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    match: PropTypes.shape({
        params: PropTypes.shape({
            recipeId: PropTypes.string.isRequired
        })
    })
};

export default Recipe;

import {
  FETCH_RECIPES_BEGIN,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  SAVE_RECIPE_BEGIN,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_FAILURE
} from '../actions/recipesActions';

const initialState = {
  error: null,
  loading: false,
  pageCount: 0,
  recipes: {}
};

let newRecipe = {};

export default function recipesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RECIPES_BEGIN:
    case SAVE_RECIPE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload.recipes.reduce((recipes, recipe) => {
          recipes[recipe.id] = recipe;
          return recipes;
        }, {}),
        pageCount: action.payload.pageCount
      };

    case SAVE_RECIPE_SUCCESS:
      newRecipe[action.payload.recipe.id] = action.payload.recipe;

      return {
        ...state,
        loading: false,
        recipes: {...state.recipes, ...newRecipe}
      };
    case FETCH_RECIPES_FAILURE:
    case SAVE_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recipes: {}
      };

    default:
      return state;
  }
}

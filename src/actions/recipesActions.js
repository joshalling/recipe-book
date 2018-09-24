import axios from 'axios';

export const FETCH_RECIPES_BEGIN   = 'FETCH_RECIPES_BEGIN';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const SAVE_RECIPE_BEGIN = 'SAVE_RECIPE_BEGIN';
export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_FAILURE = 'SAVE_RECIPE_FAILURE';


export const fetchRecipeBegin = () => ({
  type: FETCH_RECIPES_BEGIN
});

export const fetchRecipeSuccess = (recipes, pageCount) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: { recipes, pageCount }
});

export const fetchRecipeFailure = error => ({
  type: FETCH_RECIPES_FAILURE,
  payload: { error }
});

export function fetchRecipes(page = 1, keyword) {
  const limit = 10;

  return dispatch => {
    let recipesUrl = 'http://localhost:3004/recipes?_page=' + page + '&_limit=' + limit;
    recipesUrl += (keyword !== undefined) ? '&q=' + keyword: '';

    dispatch(fetchRecipeBegin());
    return axios.get(recipesUrl)
      .then(res => dispatch(fetchRecipeSuccess(res.data, Math.ceil(res.headers['x-total-count'] / limit))))
      .catch(error => dispatch(fetchRecipeFailure(error)));
  };
}

export const saveRecipeBegin = () => ({
  type: SAVE_RECIPE_BEGIN
});

export const saveRecipeSuccess = (recipe) => ({
  type: SAVE_RECIPE_SUCCESS,
  payload: { recipe }
});

export const saveRecipeFailure = error => ({
  type: SAVE_RECIPE_FAILURE,
  payload: { error }
});

export function saveRecipe(id, data) {
  return dispatch => {
    dispatch(saveRecipeBegin());
    return axios.patch('http://localhost:3004/recipes/' + id, data)
      .then(res => dispatch(saveRecipeSuccess(res.data)))
      .catch(error => dispatch(saveRecipeFailure(error)));
  };
}

import * as actions from './recipesActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const recipes = [
  {
    "id": 1,
    "name": "Lorem Ipsum",
    "ingredients": [
      "1 cup lorem",
      "1 tsp ipsum"
    ],
    "instructions": [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
    "created": "2018-09-20T12:32:47.807Z",
    "edited": "2018-09-20T12:32:47.807Z"
  },
  {
    "id": 2,
    "name": "Dolor Sit",
    "ingredients": [
      "1 cup lorem",
      "1 tsp ipsum"
    ],
    "instructions": [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
    "created": "2018-09-20T12:32:47.807Z",
    "edited": "2018-09-20T12:32:47.807Z"
  }
];

const recipe = {
  "id": 5,
  "name": "Adipisicing Elet",
  "ingredients": [
    "1 cup lorem",
    "1 tsp ipsum"
  ],
  "instructions": [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ],
  "created": "2018-09-20T12:32:47.807Z",
  "edited": "2018-09-20T12:32:47.807Z"
};

describe('recipesActions', () => {

  // FETCHING RECIPES
  it('should create an action to begin fetching recipes', () => {
    const expectedAction = {
      type: actions.FETCH_RECIPES_BEGIN
    };
    expect(actions.fetchRecipeBegin()).toEqual(expectedAction);
  });

  it('should create an action for successfully fetching recipes', () => {
    const pageCount = 1;
    const expectedAction = {
      type: actions.FETCH_RECIPES_SUCCESS,
       payload: {
         pageCount,
         recipes
       }
    };
    expect(actions.fetchRecipeSuccess(recipes, pageCount)).toEqual(expectedAction);
  });

  it('should create an action for error in fetching recipes', () => {
    const error = 'error';
    const expectedAction = {
      type: actions.FETCH_RECIPES_FAILURE,
       payload: {
         error
       }
    };
    expect(actions.fetchRecipeFailure(error)).toEqual(expectedAction);
  });


  // SAVING RECIPES
  it('should create an action to begin saving a recipe', () => {
    const expectedAction = {
      type: actions.SAVE_RECIPE_BEGIN
    };
    expect(actions.saveRecipeBegin()).toEqual(expectedAction);
  });

  it('should create an action for successfully saving a recipe', () => {
    const expectedAction = {
      type: actions.SAVE_RECIPE_SUCCESS,
       payload: {
         recipe
       }
    };
    expect(actions.saveRecipeSuccess(recipe)).toEqual(expectedAction);
  });

  it('should create an action for error in saving a recipe', () => {
    const error = 'error';
    const expectedAction = {
      type: actions.SAVE_RECIPE_FAILURE,
       payload: {
         error
       }
    };
    expect(actions.saveRecipeFailure(error)).toEqual(expectedAction);
  });
});



describe('async actions', () => {
  afterEach(() => {
    mock.reset();
  });

  let mock = new MockAdapter(axios);

  it('creates FETCH_RECIPES_SUCCESS when fetching recipes has been done', () => {

    mock
      .onGet('http://localhost:3004/recipes?_page=1&_limit=10')
      .reply(200, recipes, { 'x-total-count': recipes.length });

    const expectedActions = [
      { type: actions.FETCH_RECIPES_BEGIN },
      { type: actions.FETCH_RECIPES_SUCCESS, payload: { recipes, pageCount: 1} }
    ];

    const store = mockStore({ recipes: [] });

    return store.dispatch(actions.fetchRecipes()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  it('creates SAVE_RECIPE_SUCCESS when a recipe has been saved', () => {

    mock
      .onPatch('http://localhost:3004/recipes/' + recipe.id)
      .reply(200, recipe);

    const expectedActions = [
      { type: actions.SAVE_RECIPE_BEGIN },
      { type: actions.SAVE_RECIPE_SUCCESS, payload: { recipe } }
    ];

    const store = mockStore({ recipes: [] });

    return store.dispatch(actions.saveRecipe(recipe.id, recipe)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});

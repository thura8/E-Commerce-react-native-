import {REQUEST, SUCCESS, FAILURE} from '@constants/common';
import apiClient from '@api/apiClient';
import {categoryListEndpoint} from '@api/apiClient';

const generateApiActions = prefix => ({
  request: () => ({type: `${prefix}_${REQUEST}`}),
  success: payload => ({type: `${prefix}_${SUCCESS}`, payload}),
  failure: error => ({type: `${prefix}_${FAILURE}`, payload}),
});

export const fetchData = (actions, endpoint) => async dispatch => {
  try {
    dispatch(actions.request());
    const response = await apiClient.get(endpoint);
    dispatch(actions.success(response.data));
  } catch (error) {
    dispatch(actions.failure(error.message));
  }
};

//Action for fetching category api
export const categoriesActions = generateApiActions('CATEGORIES');

//Fetching Data from category api
export const fetchCategories = () =>
  fetchData(categoriesActions, categoryListEndpoint);

//Actions for cart operations
export const addToCart = product => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = productId => ({
  type: 'REMOVE_FROM_CART',
  payload: {productId},
});

export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {id: productId, quantity},
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

//Favorites
export const addToFavorites = product => ({
  type: 'ADD_TO_FAVORITES',
  payload: product,
});

export const removeFromFavorites = productId => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: productId,
});

// Auth

export const login = user => ({
  type: 'LOGIN',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const updatedUser = updatedUser => ({
  type: 'UPDATE_USER',
  payload: updatedUser,
});

export const signup = user => ({
  type: 'SIGNUP',
  payload: user,
});

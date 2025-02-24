import {REQUEST, SUCCESS, FAILURE} from '@constants/common';
import {User} from 'lucide-react-native';
import {combineReducers} from 'redux';

const createApiReducer = prefix => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case `${prefix}_${REQUEST}`:
        return {...state, loading: true, error: null};
      case `${prefix}_${SUCCESS}`:
        return {...state, loading: false, data: action.payload};
      case `${prefix}_${FAILURE}`:
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  };
};

//Cart
export const cartReducer = (
  state = {
    cartItems: [],
    deliveryFee: 20,
  },
  action,
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id,
      );

      const discountedPrice =
        action.payload.price * (1 - action.payload.discountPercentage / 100);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  discountedPrice,
                }
              : item,
          ),
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
            discountedPrice,
          },
        ],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.productId,
        ),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: action.payload.quantity}
            : item,
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

//Favorites

export const favoritesReducer = (state = {favorites: []}, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const isAlreadyFavorites = state.favorites.some(
        item => item.id === action.payload.id,
      );
      if (!isAlreadyFavorites) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

//Auth reducer

export const authReducer = (
  state = {user: null, isAuthenticated: false, users: []},
  action,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGNUP':
      return {
        ...state,
        users: [...state.users, action.payload],
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  categories: createApiReducer('CATEGORIES'),
  cart: cartReducer,
  favorites: favoritesReducer,
  auth: authReducer,
});

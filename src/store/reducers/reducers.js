import {REQUEST, SUCCESS, FAILURE} from '@constants/common';
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

export const rootReducer = combineReducers({
  categories: createApiReducer('CATEGORIES'),
  cart: cartReducer,
});

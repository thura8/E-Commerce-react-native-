import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectSubtotal = createSelector([selectCart], cart =>
  cart.cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  ),
);

export const selectTotalOriginalPrice = createSelector([selectCart], cart =>
  cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
);

export const selectTotalDiscount = createSelector(
  [selectTotalOriginalPrice, selectSubtotal],
  (totalOriginalPrice, subtotal) => totalOriginalPrice - subtotal,
);

export const selectDeliveryFee = createSelector(
  [selectCart],
  cart => cart.deliveryFee,
);

export const selectTotal = createSelector(
  [selectSubtotal, selectDeliveryFee],
  (subtotal, delivery) => subtotal + delivery,
);

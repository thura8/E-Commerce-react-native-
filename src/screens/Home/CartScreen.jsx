import React from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import ProductCardRow from '@components/Product/ProductCardRow';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, updateQuantity} from '@store/actions/actions';
import NothingPage from '@components/common/NothingPage';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <ContainerLayout
      header
      headerTitle="My Cart"
      leftArrow={false}
      checkout
      isCart>
      {cartItems.length === 0 ? (
        <NothingPage
          icon="ShoppingCart"
          title="Your cart is empty"
          description="appear here "
          subtitle="When you add products, they'll"
          checkout={false}
        />
      ) : (
        <>
          {cartItems.map(item => (
            <ProductCardRow
              key={item.id}
              product={item}
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </>
      )}
    </ContainerLayout>
  );
};

export default CartScreen;

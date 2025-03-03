import React from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import ProductCardRow from '@components/Product/ProductCardRow';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, updateQuantity} from '@store/actions/actions';
import NothingPage from '@components/common/NothingPage';
import {useTranslation} from 'react-i18next';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const {t} = useTranslation();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <ContainerLayout
      header
      headerTitle={t('mycart')}
      leftArrow={false}
      checkout
      isCart>
      {cartItems.length === 0 ? (
        <NothingPage
          icon="ShoppingCart"
          title={t('yourcartisempty')}
          description={t('appearhere')}
          subtitle={t('whenuaddproducts')}
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
              isCart
            />
          ))}
        </>
      )}
    </ContainerLayout>
  );
};

export default CartScreen;

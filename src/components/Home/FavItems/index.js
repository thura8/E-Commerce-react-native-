import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCardRow from '@components/Product/ProductCardRow';
import {useDispatch} from 'react-redux';
import {removeFromFavorites} from '@store/actions/actions';

const FavItems = ({favorites}) => {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <View style={styles.container}>
      {favorites.map(item => (
        <ProductCardRow product={item} key={item.id} onRemove={handleRemove} />
      ))}
    </View>
  );
};

export default FavItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

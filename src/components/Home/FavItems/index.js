import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCardRow from '@components/Product/ProductCardRow';

const FavItems = ({favorites}) => {
  return (
    <View style={styles.container}>
      {favorites.map(item => (
        <ProductCardRow product={item} key={item.id} />
      ))}
    </View>
  );
};

export default FavItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

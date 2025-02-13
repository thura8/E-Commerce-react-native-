import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import ProductCardRow from '@components/Product/ProductCardRow';

const FavItems = () => {
  return (
    <View style={styles.container}>
      <Text>Something</Text>
    </View>
  );
};

export default FavItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

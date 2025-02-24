import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import ProductCard from '@components/Product/ProductCard';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import useCategoryHook from '@hooks/useCategoryHook';
import {allProductsEndpoint} from '@api/apiClient';

const ShopDeals = () => {
  const {products, loading} = useCategoryHook(allProductsEndpoint);

  return (
    <View style={styles.productContainer}>
      <Text style={styles.title}>Shop Deals</Text>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <View style={styles.container}>
          {products?.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </View>
      )}
    </View>
  );
};

export default ShopDeals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 14,
  },
  productContainer: {
    marginTop: 16,
  },
  title: {
    fontFamily: fonts.fredokaSemiBold,
    letterSpacing: 1.3,
    fontSize: 18,
    color: colors.black,
    marginBottom: 16,
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import ProductCard from '@components/Product/ProductCard';
import useCategoryHook from '@hooks/useCategoryHook';

const CategoryProductsScreen = ({route}) => {
  const {category} = route.params;

  const {products, loading, error} = useCategoryHook(category.url);

  return (
    <ContainerLayout
      header
      headerTitle={category.name}
      cartIcon={'ShoppingCart'}
      loading={loading}
      isCart>
      <View style={styles.container}>
        {products?.map(
          (item, index) => item && <ProductCard key={index} product={item} />,
        )}
      </View>
    </ContainerLayout>
  );
};

export default CategoryProductsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 14,
  },
});

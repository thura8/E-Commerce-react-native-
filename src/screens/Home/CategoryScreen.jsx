import React from 'react';
import {Text, StyleSheet} from 'react-native';

import ContainerLayout from '@components/common/ContainerLayout';
import CategoryList from '@components/Home/Category/CategoryList';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

const CategoryScreen = () => {
  const {data} = useSelector(state => state.categories);

  const navigation = useNavigation();

  const handleCategoryProducts = selectedCategory => {
    navigation.navigate('CategoryProducts', {
      category: selectedCategory,
    });
  };

  return (
    <ContainerLayout
      header
      headerTitle="Explore & Discover"
      leftArrow={false}
      noScroll>
      <Text style={styles.allCategoriesTitle}>All Categories</Text>
      <CategoryList
        category={data}
        layout="vertical"
        onPress={item => handleCategoryProducts(item)}
      />
    </ContainerLayout>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  allCategoriesTitle: {
    fontFamily: fonts.poppinsReg,
    fontSize: 20,
    fontWeight: '700',
    color: colors.purple,
    marginBottom: 16,
  },
});

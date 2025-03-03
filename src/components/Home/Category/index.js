import {StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CategoryList from './CategoryList';

import {useNavigation} from '@react-navigation/native';
import {fetchCategories} from '@store/actions/actions';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';
import {useTranslation} from 'react-i18next';

const Category = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.categories);

  const navigation = useNavigation();

  const {t} = useTranslation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryProducts = selectedCategory => {
    navigation.navigate('CategoryProducts', {
      category: selectedCategory,
    });
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>{t('categories')}</Text>
        <ButtonInput
          btnTxt={t('seeall')}
          btnTxtStyle={styles.seeAllText}
          onPress={() => navigation.navigate('Category')}
        />
      </View>
      {loading ? (
        <Text>Loading categories...</Text>
      ) : (
        <CategoryList
          category={data}
          onPress={item => handleCategoryProducts(item)}
        />
      )}
      {error && <Text>Error: {error}</Text>}
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  categoryTitle: {
    fontFamily: fonts.fredokaSemiBold,
    color: colors.black,
    letterSpacing: 1.8,
    fontSize: 20,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.darkGray,
    fontFamily: fonts.montReg,
  },
});

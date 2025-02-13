import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import ContainerLayout from '@components/common/ContainerLayout';

import DashboardHeader from '@components/Home/HeaderSection';
import DashboardSearchBar from '@components/Home/SearchBar';
import DashboardCarousel from '@components/Home/Carousel';
import Category from '@components/Home/Category';
import ProductCard from '@components/Product/ProductCard';

const DashBoardScreen = () => {
  return (
    <ContainerLayout footer paddingEnabled={false}>
      <View style={styles.container}>
        <DashboardHeader />
        <DashboardSearchBar />
        <DashboardCarousel />

        <Category />

        <View style={styles.productContainer}>
          <Text style={styles.title}>Shop Deals</Text>
          <ProductCard />
        </View>
      </View>
    </ContainerLayout>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ContainerLayout from '@components/common/ContainerLayout';

import DashboardHeader from '@components/Home/HeaderSection';
import DashboardSearchBar from '@components/Home/SearchBar';
import DashboardCarousel from '@components/Home/Carousel';
import Category from '@components/Home/Category';
import ShopDeals from '@components/Product/ShopDeals';

const DashBoardScreen = () => {
  return (
    <ContainerLayout footer paddingEnabled={false}>
      <View style={styles.container}>
        <DashboardHeader />
        <DashboardSearchBar />
        <DashboardCarousel />

        <Category />

        <ShopDeals />
      </View>
    </ContainerLayout>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

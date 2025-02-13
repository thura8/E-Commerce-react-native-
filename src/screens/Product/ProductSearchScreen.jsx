import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import SearchHeader from '@components/common/SearchBarHeader';

const ProductSearchScreen = () => {
  return (
    <ContainerLayout header headerTitle="Explore Products" noScroll>
      <SearchHeader />
    </ContainerLayout>
  );
};

export default ProductSearchScreen;

const styles = StyleSheet.create({});

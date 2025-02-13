import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import ContainerLayout from '@components/common/ContainerLayout';
import NothingPage from '@components/common/NothingPage';
import FavItems from '@components/Home/FavItems';

const FavoritesScreen = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <ContainerLayout header headerTitle="Your Picks" noScroll={!isSaved}>
      {isSaved ? <FavItems /> : <NothingPage />}
    </ContainerLayout>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});

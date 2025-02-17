import React from 'react';
import {useSelector} from 'react-redux';
import ContainerLayout from '@components/common/ContainerLayout';
import NothingPage from '@components/common/NothingPage';
import FavItems from '@components/Home/FavItems';

const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites.favorites || []);
  const hasFavItems = favorites.length > 0;

  return (
    <ContainerLayout header headerTitle="Your Picks" noScroll={!hasFavItems}>
      {hasFavItems ? (
        <FavItems favorites={favorites} />
      ) : (
        <NothingPage
          checkout={false}
          icon="Heart"
          title="No Saved Items!"
          subtitle="You don't have any saved items."
          description="Go to home and add some."
        />
      )}
    </ContainerLayout>
  );
};

export default FavoritesScreen;

import React from 'react';
import {useSelector} from 'react-redux';
import ContainerLayout from '@components/common/ContainerLayout';
import NothingPage from '@components/common/NothingPage';
import FavItems from '@components/Home/FavItems';
import {useTranslation} from 'react-i18next';

const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites.favorites || []);
  const hasFavItems = favorites.length > 0;

  const {t} = useTranslation();

  return (
    <ContainerLayout
      header
      headerTitle={t('yourpicks')}
      noScroll={!hasFavItems}>
      {hasFavItems ? (
        <FavItems favorites={favorites} />
      ) : (
        <NothingPage
          checkout={false}
          icon="Heart"
          title={t('nosaveditems')}
          subtitle={t('anysaveditems')}
          description={t('gohomeaddsome')}
        />
      )}
    </ContainerLayout>
  );
};

export default FavoritesScreen;

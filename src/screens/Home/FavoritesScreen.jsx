import React, {useState} from 'react';

import ContainerLayout from '@components/common/ContainerLayout';
import NothingPage from '@components/common/NothingPage';
import FavItems from '@components/Home/FavItems';

const FavoritesScreen = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <ContainerLayout header headerTitle="Your Picks" noScroll={!isSaved}>
      {isSaved ? (
        <FavItems />
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

import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import SearchHeader from '@components/common/SearchBarHeader';
import debounce from 'lodash.debounce';
import useSearchHook from '@hooks/useSearchHook';
import ProductCard from '@components/Product/ProductCard';
import {ScrollView} from 'react-native-virtualized-view';
import NothingPage from '@components/common/NothingPage';

const ProductSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {searchResults, isLoading, error} = useSearchHook(searchQuery);

  const handleInputChange = useCallback(
    debounce(text => setSearchQuery(text), 150),
    [],
  );

  return (
    <ContainerLayout
      header
      headerTitle="Explore Products"
      noScroll
      loading={isLoading}>
      <SearchHeader
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          handleInputChange(text);
        }}
      />

      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      {searchQuery.length === 0 && !isLoading && (
        <NothingPage
          icon="Search"
          checkout={false}
          title="Find something!"
          subtitle="Search for your favorite products"
        />
      )}

      {searchQuery.length >= 3 && searchResults.length === 0 && !isLoading && (
        <NothingPage
          icon="Ban"
          checkout={false}
          title={`No results found for "${searchQuery}"`}
          subtitle="Please try again with a different keyword"
        />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchedProductContainer}>
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </ContainerLayout>
  );
};

export default ProductSearchScreen;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  searchedProductContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 14,
  },
});

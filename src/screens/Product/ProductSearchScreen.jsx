import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import SearchHeader from '@components/common/SearchBarHeader';
import debounce from 'lodash.debounce';
import useSearchHook from '@hooks/useSearchHook';
import ProductCard from '@components/Product/ProductCard';
import {ScrollView} from 'react-native-virtualized-view';

const ProductSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {searchResults, isLoading, error} = useSearchHook(searchQuery);

  const handleInputChange = useCallback(
    debounce(text => setSearchQuery(text), 150),
    [],
  );

  return (
    <ContainerLayout header headerTitle="Explore Products" noScroll>
      <SearchHeader
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          handleInputChange(text);
        }}
      />
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {searchQuery.length >= 3 && searchResults.length === 0 && !isLoading && (
        <Text>No results found for "{searchQuery}"</Text>
      )}
      <ScrollView>
        {searchResults.map(product => (
          <ProductCard product={product} />
        ))}
      </ScrollView>
    </ContainerLayout>
  );
};

export default ProductSearchScreen;

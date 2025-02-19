import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {searchProductsEndpoint} from '@api/apiClient';

const useSearchHook = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    useSearchHook(searchProductsEndpoint)
      .then(result => {
        result.isSuccess && setSearchResults(result.respObj);
      })
      .catch(err => {
        setError(err.error);
      })
      .finally(_ => setIsLoading(false));
  }, []);

  return {searchResults, isLoading, error};
};

export default useSearchHook;

import {useState, useEffect} from 'react';
import axios from 'axios';
import apiClient, {searchProductsEndpoint} from '@api/apiClient';

const useSearchHook = searchQuery => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery.length < 3) {
      setSearchResults([]);
      return;
    }

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiClient.get(searchProductsEndpoint, {
          params: {q: searchQuery},
          cancelToken: source.token,
        });

        if (
          response?.status === 200 &&
          Array.isArray(response.data?.products)
        ) {
          setSearchResults(response.data.products);
        } else {
          setSearchResults([]);
          setError('No products found');
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request cancelled:', err.message);
        } else {
          setError(err.message || 'An error occurred');
        }
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => source.cancel('Search request cancelled');
  }, [searchQuery]);

  return {searchResults, isLoading, error};
};

export default useSearchHook;

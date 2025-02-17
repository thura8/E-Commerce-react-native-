import React, {useEffect, useState} from 'react';
import {useGetCategories} from 'src/services/categoryServices';

const useCategoryHook = (endpoint, params = {}) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(_ => {
    useGetCategories(endpoint, params)
      .then(result => {
        if (result.isSuccess) {
          setProducts(result.respObj);
        }
      })
      .catch(err => {
        setError(err.error);
      })
      .finally(_ => setLoading(false));
  }, []);

  return {products, loading, error};
};

export default useCategoryHook;

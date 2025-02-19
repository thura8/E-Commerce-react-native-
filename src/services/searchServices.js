import apiClient, {sourceToken} from '@api/apiClient';
import axios from 'axios';

export const useGetSearchedProducts = async (endpoint, params) => {
  try {
    const response = await apiClient.get(endpoint, {
      params,
      cancelToken: sourceToken.token,
    });

    if (response?.status === 200) {
      if (
        Array.isArray(response.data?.products) &&
        response.data.products.length > 0
      ) {
        return {
          isSuccess: true,
          respObj: response.data.products,
          respMsg: 'Data fetched successfully',
        };
      } else {
        return {
          isSuccess: false,
          respObj: null,
          respMsg: 'Data is empty!',
        };
      }
    } else {
      return {
        isSuccess: false,
        respMsg: 'Something went wrong!',
      };
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request cancelled: ', error.message);
      return {
        isSuccess: false,
        data: null,
        message: 'Request cancelled!',
      };
    } else {
      console.log('Error fetching search result: ', error);
      return {
        isSuccess: false,
        data: null,
        message: error.message || 'An error occurred!',
      };
    }
  }
};

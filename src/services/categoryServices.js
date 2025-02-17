import apiClient, {sourceToken} from '@api/apiClient';

export const useGetCategories = async (endpoint, params) => {
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
    throw {error};
  }
};

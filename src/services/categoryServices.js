import apiClient, {sourceToken} from '@api/apiClient';

export const useGetCategories = (endpoint, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await apiClient.get(endpoint, {
        params,
        cancelToken: sourceToken.token,
      });
      if (response?.status == '200') {
        if (
          response.data?.products &&
          Array.isArray(response.data.products) &&
          response.data.products.length > 0
        ) {
          resolve({
            isSuccess: true,
            respObj: response.data.products,
          });
        } else {
          resolve({
            isSuccess: false,
            respObj: null,
            respMsg: 'Data is empty!',
          });
        }
      } else {
        resolve({
          isSuccess: false,
          respMsg: 'Something went wrong!',
        });
      }
    } catch (error) {
      reject({
        error,
      });
    }
  });
};

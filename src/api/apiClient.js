import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
});

//Token
export const sourceToken = axios.CancelToken.source();

//Endpoints
export const categoryListEndpoint = '/products/categories';
export const allProductsEndpoint = '/products';

export default apiClient;

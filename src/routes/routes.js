//DashBoard imports
import DashBoardScreen from '@screens/Home/DashBoardScreen';
import ProductSearchScreen from '@screens/Product/ProductSearchScreen';
import FavoritesScreen from '@screens/Home/FavoritesScreen';
import ProductDetailsScreen from '@screens/Product/ProductDetailsScreen/ProductDetailsScreen';
import AccountScreen from '@screens/Home/AccountScreen';

//Auth imports
import LoginScreen from '@screens/Auth/LoginScreen';
import SignUpScreen from '@screens/Auth/SignUpScreen';
import CategoryScreen from '@screens/Home/CategoryScreen';
import CartScreen from '@screens/Home/CartScreen';
import CategoryProductsScreen from '@screens/Home/CategoryProductsScreen';

export const authNavigations = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
];

export const dashBoardNavigations = [
  {
    name: 'Home',
    component: DashBoardScreen,
  },
  {
    name: 'Category',
    component: CategoryScreen,
  },
  {
    name: 'Cart',
    component: CartScreen,
  },
  {
    name: 'Account',
    component: AccountScreen,
  },
  {
    name: 'Search',
    component: ProductSearchScreen,
  },
  {
    name: 'Favorites',
    component: FavoritesScreen,
  },
  {
    name: 'ProductDetails',
    component: ProductDetailsScreen,
  },
  {
    name: 'CategoryProducts',
    component: CategoryProductsScreen,
  },
];

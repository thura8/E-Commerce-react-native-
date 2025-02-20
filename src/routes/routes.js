//DashBoard imports
import DashBoardScreen from '@screens/Home/DashBoardScreen';
import ProductSearchScreen from '@screens/Product/ProductSearchScreen';
import FavoritesScreen from '@screens/Home/FavoritesScreen';
import ProductDetailsScreen from '@screens/Product/ProductDetailsScreen/ProductDetailsScreen';
import AccountScreen from '@screens/Home/AccountScreen';
import CategoryScreen from '@screens/Home/CategoryScreen';
import CartScreen from '@screens/Home/CartScreen';
import CategoryProductsScreen from '@screens/Home/CategoryProductsScreen';
import CheckOutScreen from '@screens/Home/CheckOutScreen.jsx';
import NothingPage from '@components/common/NothingPage';
import PrivacySettings from '@components/Accounts/Privacy';
import ContactUs from '@components/Accounts/ContactUs';
import PaymentMethods from '@components/Accounts/PaymentMethod';

//Auth imports
import LoginScreen from '@screens/Auth/LoginScreen';
import SignUpScreen from '@screens/Auth/SignUpScreen';

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
  {
    name: 'CheckOut',
    component: CheckOutScreen,
  },
  {
    name: 'NothingPage',
    component: NothingPage,
  },
  {
    name: 'Privacy',
    component: PrivacySettings,
  },
  {
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    name: 'PaymentMethod',
    component: PaymentMethods,
  },
];

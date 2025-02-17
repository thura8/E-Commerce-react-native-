import {Home, Logs, ShoppingCart, User} from 'lucide-react-native';
import {Dimensions, Platform} from 'react-native';

//Platform constants
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

//Dimensions constants
export const Screen = Dimensions.get('screen');
export const Window = Dimensions.get('window');

//Bottom Tabs
export const bottomTabs = [
  {name: 'Home', icon: Home},
  {name: 'Category', icon: Logs},
  {name: 'Cart', icon: ShoppingCart},
  {name: 'Account', icon: User},
];

//Carousel Images
export const imageSlides = [
  {
    id: 1,
    imgURL: require('@assets/images/carousel/image_1.jpg'),
  },
  {
    id: 2,
    imgURL: require('@assets/images/carousel/image_2.png'),
  },
  {
    id: 3,
    imgURL: require('@assets/images/carousel/image_3.png'),
  },
  {
    id: 4,
    imgURL: require('@assets/images/carousel/image_4.png'),
  },
];

//Category List
export const categoryList = [
  {
    name: 'Beauty',
    icon: require('@assets/icons/CategoryIcons/Beauty/beauty.png'),
  },
  {
    name: 'Fragrances',
    icon: require('@assets/icons/CategoryIcons/Perfume/perfume.png'),
  },
  {name: 'Furniture', icon: 'Armchair'},
  {
    name: 'Groceries',
    icon: require('@assets/icons/CategoryIcons/Groceries/groceries.png'),
  },
  {
    name: 'Home Decoration',
    icon: require('@assets/icons/CategoryIcons/Home-Decoration/home-decoration.png'),
  },
  {
    name: 'Kitchen Accessories',
    icon: require('@assets/icons/CategoryIcons/Kitchen-Accessories/kitchen-accessories.png'),
  },
  {name: 'Laptops', icon: 'Laptop'},
  {
    name: 'Mens Shirts',
    icon: require('@assets/icons/CategoryIcons/Men-Shirt/t-shirt.png'),
  },
  {
    name: 'Mens Shoes',
    icon: require('@assets/icons/CategoryIcons/Men-Shoes/trainers.png'),
  },
  {name: 'Mens Watches', icon: 'Watch'},
  {name: 'Mobile Accessories', icon: 'Smartphone'},
  {
    name: 'Motorcycle',
    icon: require('@assets/icons/CategoryIcons/Motorcycle/motorcycle.png'),
  },
  {name: 'Skin Care', icon: 'Milk'},
  {name: 'Smartphones', icon: 'Smartphone'},
  {name: 'Sports Accessories', icon: 'Dumbbell'},
  {name: 'Sunglasses', icon: 'Glasses'},
  {name: 'Tablets', icon: 'Tablet'},
  {name: 'Tops', icon: require('@assets/icons/CategoryIcons/Tops/tops.png')},
  {name: 'Vehicle', icon: 'Car'},
  {
    name: 'Womens Bags',
    icon: require('@assets/icons/CategoryIcons/Women-Bags/bags.png'),
  },
  {
    name: 'Womens Dresses',
    icon: require('@assets/icons/CategoryIcons/Women-Dresses/dresses.png'),
  },
  {
    name: 'Womens Jewellery',
    icon: require('@assets/icons/CategoryIcons/Ring/ring.png'),
  },
  {
    name: 'Womens Shoes',
    icon: require('@assets/icons/CategoryIcons/Women-shoes/women-shoes.png'),
  },
  {
    name: 'Womens Watches',
    icon: require('@assets/icons/CategoryIcons/Women-watches/watches.png'),
  },
];

export const accountGeneral = [
  {
    icon: 'User',
    title: 'Account Details',
    subtitle: 'Edit your account information',
  },
  {
    icon: 'CreditCard',
    title: 'Payment Method',
    subtitle: 'Add your credit or debit card',
  },
  {
    icon: 'MapPin',
    title: 'Delivery Addresses',
    subtitle: 'Edit or add new addresses',
  },
];

// Account Setting
export const accountSetting = [
  {
    icon: 'Globe',
    title: 'Language',
    subtitle: '',
  },
  {
    icon: 'Info',
    title: 'Privacy & Policy',
    subtitle: '',
  },
  {
    icon: 'Phone',
    title: 'Contact us',
    subtitle: '',
  },
];

//Auth related arrays
export const authInputs = [
  {
    id: 1,
    title: 'Username',
    eye: false,
  },
  {
    id: 2,
    title: 'Email',
    eye: false,
  },
  {
    id: 3,
    title: 'Password',
    eye: true,
  },
];

export const authButtons = [
  {
    id: 1,
    icon: require('@assets/icons/AuthIcons/facebook.png'),
    value: 'Continue with facebook',
  },
  {
    id: 2,
    icon: require('@assets/icons/AuthIcons/google.png'),
    value: 'Continue with Google',
  },
];

export const authSwitchOptions = [
  {
    id: 1,
    message: 'Dont have an account?',
    text: 'Sign Up',
  },
  {
    id: 2,
    message: 'Already have an account?',
    text: 'Sign In',
  },
];

//Redux
export const REQUEST = 'FETCH_REQUEST';
export const SUCCESS = 'FETCH_SUCCESS';
export const FAILURE = 'FETCH_FAILURE';

export const paymentOptions = [
  {
    name: 'visa',
    image: require('@assets/images/payment_options/visa.png'),
  },
  {
    name: 'paypal',
    image: require('@assets/images/payment_options/paypal.png'),
  },
  {
    name: 'mastercard',
    image: require('@assets/images/payment_options/mastercard.png'),
  },
];

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  useNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {authNavigations, dashBoardNavigations} from './routes';
import {colors} from '@constants/colors';
import {bottomTabs} from '@constants/common';
import fonts from '@assets/fonts';
import BottomTabNavigator from './BottomTabNavigator';

//Auth Stack
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {authNavigations.map((item, index) => (
        <AuthStack.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </AuthStack.Navigator>
  );
};

//Main Stack
const MainStack = createStackNavigator();
const MainNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <MainStack.Screen name="AuthStack" component={AuthStackNavigator} />
        <MainStack.Screen name="MainTabs" component={BottomTabNavigator} />
        {dashBoardNavigations
          .filter(screen => !bottomTabs.some(tab => tab.name === screen.name))
          .map((item, index) => (
            <MainStack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          ))}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

import React, {useRef, useEffect} from 'react';
import {Animated, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import {dashBoardNavigations} from './routes';
import {bottomTabs} from '@constants/common';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabButton = ({routeName, isFocused, icon: Icon, onPress}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isFocused ? 1.2 : 1,
      useNativeDriver: true,
      friction: 4,
      tension: 30,
    }).start();
  }, [isFocused, scaleAnim]);
  const cartItemCount = useSelector(state => state.cart.cartItems.length);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Animated.View
        style={[
          styles.tabButton,
          isFocused && styles.activeTab,
          {transform: [{scale: scaleAnim}]},
        ]}>
        <Icon color={isFocused ? colors.white : colors.purple} size={24} />
        {routeName === 'Cart' && cartItemCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
          </View>
        )}
        {isFocused && <Text style={styles.tabLabel}>{routeName}</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({state, navigation, cartItemCount}) => (
  <View style={styles.tabBarContainer}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const tabConfig = bottomTabs.find(tab => tab.name === route.name);

      return (
        <TabButton
          key={route.key}
          routeName={route.name}
          isFocused={isFocused}
          icon={tabConfig?.icon}
          onPress={() => navigation.navigate(route.name)}
          cartItemCount={route.name === 'Cart' ? cartItemCount : 0}
        />
      );
    })}
  </View>
);

const BottomTabNavigator = () => {
  const screenLookup = dashBoardNavigations.reduce((acc, curr) => {
    acc[curr.name] = curr.component;
    return acc;
  }, {});

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {bottomTabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={screenLookup[tab.name]}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  tabButton: {
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    position: 'relative',
  },
  activeTab: {
    backgroundColor: colors.hotPink,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  tabLabel: {
    marginLeft: 8,
    fontFamily: fonts.fredokaRegular,
    fontSize: 14,
    color: colors.white,
  },
  cartBadge: {
    position: 'absolute',
    top: -12,
    right: -5,
    backgroundColor: colors.red,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.fredokaLight,
  },
});

export default BottomTabNavigator;

import {View, ScrollView} from 'react-native';
import React from 'react';

import Header from '../Header';
import LoadingView from '../LoadingView';
import CheckOutBtn from '../CheckOutBtn';

import {colors} from '@constants/colors';
import {isIos} from '@constants/common';
import useStatusBar from '@hooks/useStatusBar';

const ContainerLayout = ({
  children,
  header = false,
  cartIcon = '',
  logOutIcon = '',
  headerTitle = '',
  leftArrow = true,
  loading = false,
  bgColor = colors.lightPink,
  contentContainerStyle,
  noScroll = false,
  paddingEnabled = true,
  translucentbar = isIos,
  barStyle = 'dark-content',
  statusBarBackgroundColor,
  isFlex = true,
  checkout = false,
}) => {
  useStatusBar({
    barStyle,
    statusBarBackgroundColor,
    translucentbar,
  });

  return (
    <View style={{flex: 1, backgroundColor: bgColor}}>
      {loading && <LoadingView />}
      <View
        style={{
          flex: 1,
          marginTop: translucentbar ? 0 : 4,
          paddingHorizontal: paddingEnabled ? 16 : 0,
          ...contentContainerStyle,
        }}>
        {header && (
          <Header
            title={headerTitle}
            showLeft={leftArrow}
            cartIcon={cartIcon}
            logOutIcon={logOutIcon}
          />
        )}

        {noScroll ? (
          <View style={{flex: 1}}>{children}</View>
        ) : (
          <ScrollView
            contentContainerStyle={[
              isFlex ? {flexGrow: 1} : {},
              checkout ? {paddingBottom: 155} : {},
            ]}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        )}
        {checkout && <CheckOutBtn />}
      </View>
    </View>
  );
};

export default ContainerLayout;

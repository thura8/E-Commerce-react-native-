import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {isIos} from '@constants/common';

const useStatusBar = ({
  barStyle = 'dark-content',
  statusBarBackgroundColor = '#FCDDE8',
  translucentbar = isIos,
}) => {
  useEffect(() => {
    StatusBar.setBarStyle(barStyle, true);

    if (!isIos) {
      StatusBar.setBackgroundColor(statusBarBackgroundColor, true);
      StatusBar.setTranslucent(translucentbar);
    }
  }, [barStyle, statusBarBackgroundColor, translucentbar]);
};

export default useStatusBar;

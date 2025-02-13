import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Window} from '@constants/common';
import FastImage from 'react-native-fast-image';

const LoadingView = ({size = 36}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('@assets/images/loading/loading.gif')}
        style={{width: size, height: size}}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default LoadingView;

const styles = StyleSheet.create({
  container: {
    width: Window.width,
    height: Window.height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
});

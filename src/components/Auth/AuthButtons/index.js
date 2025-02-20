import {StyleSheet, View} from 'react-native';
import React from 'react';

import {authButtons} from '@constants/common';
import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import SwitchAuthOptions from '../SwitchAuthOptions';

const AuthButtons = ({onPress, isSignUp}) => {
  return (
    <View>
      {authButtons.map((btn, index) => (
        <ButtonInput
          key={index}
          icon={btn.icon}
          btnTxt={btn.value}
          btnTxtStyle={styles.text}
          btnCtnStyle={[styles.container, {columnGap: btn.id === 2 ? 34 : 16}]}
          imgStyle={{width: 30, height: 30}}
        />
      ))}

      <SwitchAuthOptions onPress={onPress} isSignUpEnabled={isSignUp} />
    </View>
  );
};

export default AuthButtons;

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    paddingVertical: 4,
    marginBottom: 28,
    backgroundColor: colors.whitePink,
  },
  text: {
    color: colors.darkGray,
    fontFamily: fonts.fredokaRegular,
    fontSize: 18,
  },
});

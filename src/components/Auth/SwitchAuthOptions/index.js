import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {authSwitchOptions} from '@constants/common';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

const SwitchAuthOptions = ({isSignUpEnabled = false, onPress}) => {
  const option = authSwitchOptions.find(
    option =>
      (isSignUpEnabled && option.id === 2) ||
      (!isSignUpEnabled && option.id === 1),
  );

  return (
    <View key={option?.id} style={styles.container}>
      <Text style={styles.text}>{option?.message}</Text>
      <ButtonInput
        onPress={onPress}
        btnTxt={option?.text}
        btnTxtStyle={{
          fontSize: 16,
          color: colors.black,
          marginLeft: 5,
        }}
      />
    </View>
  );
};

export default SwitchAuthOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  text: {
    fontSize: 16,
    color: colors.darkGray,
  },
});

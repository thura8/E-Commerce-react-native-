import {StyleSheet, Text} from 'react-native';
import React from 'react';

import ContainerLayout from '@components/common/ContainerLayout';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';

import AuthHandler from '@components/Auth/AuthHandler';
import AuthSeparator from '@components/Auth/AuthSeparator';
import AuthButtons from '@components/Auth/AuthButtons';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ContainerLayout noScroll={true}>
      <Text style={styles.text}>Welcome Back!</Text>

      <AuthHandler />
      <AuthSeparator text={'OR'} />
      <AuthButtons
        onPress={() => navigation.navigate('SignUp')}
        isSignUp={false}
      />
    </ContainerLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 36,
    color: colors.white,
    marginTop: 20,
  },
});

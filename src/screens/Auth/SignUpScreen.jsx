import {View, Text} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import ContainerLayout from '@components/common/ContainerLayout';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import AuthHandler from '@components/Auth/AuthHandler';
import AuthSeparator from '@components/Auth/AuthSeparator';
import AuthButtons from '@components/Auth/AuthButtons';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ContainerLayout noScroll={true}>
      <Text
        style={{
          fontFamily: fonts.fredokaSemiBold,
          fontSize: 36,
          color: colors.white,
          marginTop: 8,
        }}>
        Create Your Account
      </Text>

      <AuthHandler isSignUp />

      <AuthSeparator text={'Or sign in with'} />

      <AuthButtons onPress={() => navigation.navigate('Login')} isSignUp />
    </ContainerLayout>
  );
};

export default SignUpScreen;

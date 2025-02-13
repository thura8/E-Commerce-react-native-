import {colors} from '@constants/colors';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AuthSeparator = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGray,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
  },
});

export default AuthSeparator;

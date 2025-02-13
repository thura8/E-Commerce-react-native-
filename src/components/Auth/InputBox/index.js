import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ButtonInput from '@components/common/ButtonInput';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

const InputBox = ({inputName, eye, value, onChanged}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder={inputName}
        style={styles.input}
        value={value}
        onChangeText={onChanged}
        secureTextEntry={eye && !showPassword}
      />
      {eye && (
        <ButtonInput
          btnCtnStyle={{
            position: 'absolute',
            top: 12,
            right: 12,
          }}
          icon={
            showPassword
              ? require('@assets/icons/AuthIcons/eye-off.png')
              : require('@assets/icons/AuthIcons/eye.png')
          }
          onPress={() => setShowPassword(!showPassword)}
          imgStyle={{width: 28, height: 28}}
        />
      )}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    position: 'relative',
  },
  input: {
    width: 380,
    height: 53,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: fonts.fredokaLight,
  },
  eye: {
    width: 28,
    height: 28,
  },
  icon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});

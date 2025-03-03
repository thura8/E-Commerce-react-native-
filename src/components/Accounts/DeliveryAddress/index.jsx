import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Home, Landmark as City, Flag, Mail} from 'lucide-react-native';
import ContainerLayout from '@components/common/ContainerLayout';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import ButtonInput from '@components/common/ButtonInput';

const DeliveryAddress = () => {
  const {t} = useTranslation();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = () => {
    const address = {street, city, state, zipCode};
    console.log('Submitted Address:', address);
  };

  const renderInput = (
    label,
    value,
    setValue,
    icon,
    placeholder,
    keyboardType = 'default',
  ) => (
    <View style={styles.inputContainer}>
      <View style={{position: 'relative', top: 14}}>{icon}</View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );

  return (
    <ContainerLayout header={true} headerTitle={t('deliveryaddresses')}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <View style={styles.card}>
          {renderInput(
            t('street'),
            street,
            setStreet,
            <Home color={colors.purple} size={24} />,
            t('enterurstreet'),
          )}
          {renderInput(
            t('city'),
            city,
            setCity,
            <City color={colors.purple} size={24} />,
            t('enterurcity'),
          )}
          {renderInput(
            t('state'),
            state,
            setState,
            <Flag color={colors.purple} size={24} />,
            t('enterurstate'),
          )}
          {renderInput(
            t('zipcode'),
            zipCode,
            setZipCode,
            <Mail color={colors.purple} size={24} />,
            t('enterurzipcode'),
            'numeric',
          )}

          <ButtonInput
            btnCtnStyle={styles.submitButton}
            onPress={handleSubmit}
            icon={'Check'}
            iconColor={colors.white}
            iconSize={24}
            btnTxt={t('submitaddress')}
            btnTxtStyle={styles.submitButtonText}
          />
        </View>
      </KeyboardAvoidingView>
    </ContainerLayout>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.whitePink,
    borderRadius: 12,
    width: 340,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.fredokaRegular,
    marginBottom: 5,
    color: colors.darkGray,
  },
  input: {
    height: 40,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: colors.purple,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: colors.white,
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 18,
    letterSpacing: 0.6,
    marginLeft: 10,
  },
});

export default DeliveryAddress;

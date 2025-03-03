import React, {useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updatedUser} from '@store/actions/actions';

import ButtonInput from '@components/common/ButtonInput';
import ContainerLayout from '@components/common/ContainerLayout';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const AccountDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!username.trim() || !email.trim()) {
      Alert.alert(t('accError'), t('fillallfields'));
      return;
    }

    const updatedUserData = {
      ...user,
      username,
      email,
    };

    dispatch(updatedUser(updatedUserData));

    setIsEditing(false);
    Alert.alert(t('accSuccess'), t('accnoti'));
  };

  const {t} = useTranslation();

  return (
    <ContainerLayout header headerTitle={t('accDetails')}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('username')}</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          editable={isEditing}
          placeholder="Enter your username"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('email')}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <ButtonInput
        btnCtnStyle={styles.button}
        btnTxtStyle={styles.buttonText}
        btnTxt={isEditing ? t('savechanges') : t('edituraccinfo')}
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
      />
    </ContainerLayout>
  );
};

export default AccountDetails;

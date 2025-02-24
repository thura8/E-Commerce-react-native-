import ContainerLayout from '@components/common/ContainerLayout';
import {useState} from 'react';
import {View, StyleSheet, Alert, TextInput, Button} from 'react-native';

const AccountDetails = ({initialUsername, initialEmail}) => {
  const [username, setUsername] = useState(initialUsername || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateAccount = async () => {
    setLoading(true);
    try {
      Alert.alert('Success', 'Account details updated successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerLayout header headerTitle="Account Details">
      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Updating...' : 'Update Account'}
          onPress={handleUpdateAccount}
          disabled={loading}
        />
      </View>
    </ContainerLayout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default AccountDetails;

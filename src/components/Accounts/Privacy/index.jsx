import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {Shield, Mail, Users, Lock, Download, Trash2} from 'lucide-react-native';

import ContainerLayout from '@components/common/ContainerLayout';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

import {styles} from './styles';

export default function PrivacySettings() {
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSaveSettings = () => {
    console.log('Privacy settings saved');
  };

  return (
    <ContainerLayout header headerTitle="Privacy & Policy">
      <View style={styles.header}>
        <Shield color={colors.black} size={24} />
        <Text style={styles.title}>Privacy Settings</Text>
      </View>
      <Text style={styles.description}>
        Manage your privacy and security preferences
      </Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Mail color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>Marketing Preferences</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>Receive marketing emails</Text>
            <Text style={styles.settingDescription}>
              Get updates on new products and sales
            </Text>
          </View>
          <Switch value={marketingEmails} onValueChange={setMarketingEmails} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Users color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>Data Sharing</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>Share data with partners</Text>
            <Text style={styles.settingDescription}>
              Allow us to share your data with trusted partners
            </Text>
          </View>
          <Switch value={dataSharing} onValueChange={setDataSharing} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Users color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>Account Visibility</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>Public profile</Text>
            <Text style={styles.settingDescription}>
              Make your profile visible to other users
            </Text>
          </View>
          <Switch
            value={profileVisibility}
            onValueChange={setProfileVisibility}
          />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Lock color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>Login Security</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>Two-factor authentication</Text>
            <Text style={styles.settingDescription}>
              Add an extra layer of security to your account
            </Text>
          </View>
          <Switch value={twoFactorAuth} onValueChange={setTwoFactorAuth} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Control</Text>
        <View style={styles.buttonContainer}>
          <ButtonInput
            btnCtnStyle={styles.button}
            btnTxt={'Download My Data'}
            btnTxtStyle={styles.buttonText}>
            <Download color={colors.white} size={16} />
          </ButtonInput>
          <ButtonInput
            btnCtnStyle={[styles.button, styles.deleteButton]}
            btnTxt={'Delete Account'}
            btnTxtStyle={styles.buttonText}>
            <Trash2 color={colors.white} size={16} />
          </ButtonInput>
        </View>
      </View>

      <ButtonInput
        btnCtnStyle={styles.saveButton}
        onPress={handleSaveSettings}
        btnTxt={'Save Privacy Settings'}
        btnTxtStyle={styles.saveButtonText}
      />
    </ContainerLayout>
  );
}

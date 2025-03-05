import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {Shield, Mail, Users, Lock, Download, Trash2} from 'lucide-react-native';

import ContainerLayout from '@components/common/ContainerLayout';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function PrivacySettings() {
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const {t} = useTranslation();

  const handleSaveSettings = () => {
    console.log('Privacy settings saved');
  };

  return (
    <ContainerLayout header headerTitle={t('privacyandpolicy')}>
      <View style={styles.header}>
        <Shield color={colors.black} size={24} />
        <Text style={styles.title}>{t('privacysettings')}</Text>
      </View>
      <Text style={styles.description}>
        {t('manageurprivacynsecuritypreferences')}
      </Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Mail color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>{t('marketingpreferences')}</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>
              {t('receivemarketingemails')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('getupdatesmails')}
            </Text>
          </View>
          <Switch value={marketingEmails} onValueChange={setMarketingEmails} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Users color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>{t('datasharing')}</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>
              {t('sharedatawithpartners')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('allowustoshareurdata')}
            </Text>
          </View>
          <Switch value={dataSharing} onValueChange={setDataSharing} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Users color={colors.black} size={20} />
          <Text style={styles.sectionTitle}>{t('accountvisibility')}</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>{t('publicprofile')}</Text>
            <Text style={styles.settingDescription}>
              {t('makeprofilevisible')}
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
          <Text style={styles.sectionTitle}>{t('loginsecurity')}</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.settingTitle}>
              {t('twofactorauthentication')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('addanextralayer')}
            </Text>
          </View>
          <Switch value={twoFactorAuth} onValueChange={setTwoFactorAuth} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('datacontrol')}</Text>
        <View style={styles.buttonContainer}>
          <ButtonInput
            btnCtnStyle={styles.button}
            btnTxt={t('downloadmydata')}
            btnTxtStyle={styles.buttonText}>
            <Download color={colors.white} size={16} />
          </ButtonInput>
          <ButtonInput
            btnCtnStyle={[styles.button, styles.deleteButton]}
            btnTxt={t('deleteaccount')}
            btnTxtStyle={styles.buttonText}>
            <Trash2 color={colors.white} size={16} />
          </ButtonInput>
        </View>
      </View>

      <ButtonInput
        btnCtnStyle={styles.saveButton}
        onPress={handleSaveSettings}
        btnTxt={t('saveprivacysettings')}
        btnTxtStyle={styles.saveButtonText}
      />
    </ContainerLayout>
  );
}

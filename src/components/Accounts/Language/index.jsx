import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ContainerLayout from '@components/common/ContainerLayout';
import ButtonInput from '@components/common/ButtonInput';
import i18n, {loadLanguage, saveLanguage} from '@config/i18n/i18n';
import {colors} from '@constants/colors';
import {useTranslation} from 'react-i18next';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const {t} = useTranslation();

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        await loadLanguage();
        setSelectedLanguage(i18n.language);
      } catch (error) {
        console.error('Failed to load language:', error);
      }
    };

    initializeLanguage();
  }, []);

  const handleLanguageChange = async language => {
    try {
      setSelectedLanguage(language);
      await saveLanguage(language);
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  };

  return (
    <ContainerLayout header headerTitle={t('languages')}>
      <Text style={styles.label}>{t('languageOptions')}</Text>
      <View style={styles.optionContainer}>
        {['en', 'mm'].map(lang => (
          <ButtonInput
            key={lang}
            btnCtnStyle={styles.option}
            onPress={() => handleLanguageChange(lang)}
            btnTxt={lang === 'en' ? 'English' : t('myanmar')}
            btnTxtStyle={styles.optionText}
            icon={selectedLanguage === lang ? 'CheckSquare' : 'Square'}
            iconColor={selectedLanguage === lang ? colors.purple : '#ccc'}
          />
        ))}
      </View>
    </ContainerLayout>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  optionContainer: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Language;

import {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Linking} from 'react-native';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from 'lucide-react-native';
import ContainerLayout from '@components/common/ContainerLayout';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted', {name, email, message});

    setName('');
    setEmail('');
    setMessage('');
  };

  const openLink = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const {t} = useTranslation();

  return (
    <ContainerLayout header headerTitle={t('contact')}>
      <View style={styles.form}>
        <Text style={styles.label}>{t('name')}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={t('entername')}
        />

        <Text style={styles.label}>{t('Email')}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={t('enteremail')}
          keyboardType="email-address"
        />

        <Text style={styles.label}>{t('Message')}</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={setMessage}
          placeholder={t('entermessage')}
          multiline
        />

        <ButtonInput
          btnCtnStyle={styles.submitButton}
          onPress={handleSubmit}
          btnTxt={t('sendmessage')}
          btnTxtStyle={styles.submitButtonText}>
          <Send color={colors.white} size={20} />
        </ButtonInput>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.sectionTitle}>{t('contactInfo')}</Text>

        <View style={styles.infoItem}>
          <Phone color={colors.hotPink} size={20} />
          <Text style={styles.infoText}>+959 250663291</Text>
        </View>

        <View style={styles.infoItem}>
          <Mail color={colors.hotPink} size={20} />
          <Text style={styles.infoText}>contact@ecommerce.com</Text>
        </View>

        <View style={styles.infoItem}>
          <MapPin color={colors.hotPink} size={20} />
          <Text style={styles.infoText}>
            143 Doraemon St, Konoha City, 832002
          </Text>
        </View>
      </View>

      <View style={styles.socialLinks}>
        <Text style={styles.sectionTitle}>{t('followus')}</Text>
        <View style={styles.socialIcons}>
          <ButtonInput
            btnCtnStyle={styles.socialIconsContainer}
            onPress={() => openLink('https://facebook.com')}>
            <Facebook color="#3b5998" size={30} />
          </ButtonInput>
          <ButtonInput
            btnCtnStyle={styles.socialIconsContainer}
            onPress={() => openLink('https://twitter.com')}>
            <Twitter color="#1da1f2" size={30} />
          </ButtonInput>
          <ButtonInput
            btnCtnStyle={styles.socialIconsContainer}
            onPress={() => openLink('https://instagram.com')}>
            <Instagram color="#e1306c" size={30} />
          </ButtonInput>
        </View>
      </View>
    </ContainerLayout>
  );
}

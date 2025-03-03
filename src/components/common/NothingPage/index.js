import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as LucideIcons from 'lucide-react-native';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import ButtonInput from '../ButtonInput';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const NothingPage = ({
  icon = 'ShoppingCart',
  title,
  subtitle,
  description = '',
  iconSize = 56,
  iconColor = colors.white,
  checkout = true,
}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const pageTitle = title || t('ordersuccess');
  const pageSubtitle = subtitle || t('youhavemadesuccessfullymadeorder.');

  return (
    <View style={styles.container}>
      <NothingPageContent
        icon={icon}
        title={pageTitle}
        subtitle={pageSubtitle}
        description={description}
        iconSize={iconSize}
        iconColor={checkout ? colors.hotPink : iconColor}
      />
      {checkout && (
        <ButtonInput onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            colors={[colors.hotPink, colors.purple]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.placeOrderButton}>
            <Text style={styles.placeOrderText}>{t('continueshopping')}</Text>
          </LinearGradient>
        </ButtonInput>
      )}
    </View>
  );
};

const NothingPageContent = ({
  icon,
  title,
  subtitle,
  description,
  iconSize,
  iconColor,
}) => {
  const IconComponent = LucideIcons[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react-native.`);
    return null;
  }

  return (
    <View style={styles.textContainer}>
      <IconComponent size={iconSize} color={iconColor} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {description ? <Text style={styles.subtitle}>{description}</Text> : null}
    </View>
  );
};

export default NothingPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  icon: {
    marginBottom: 12,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.fredokaSemiBold,
    letterSpacing: 0.8,
    fontSize: 24,
    color: colors.black,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: fonts.fredokaRegular,
    color: colors.gray,
    fontSize: 18,
    letterSpacing: 0.8,
    textAlign: 'center',
    marginVertical: 2,
  },
  placeOrderButton: {
    width: 320,
    marginTop: 12,
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  placeOrderText: {
    color: colors.white,
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 19,
    letterSpacing: 0.8,
  },
});

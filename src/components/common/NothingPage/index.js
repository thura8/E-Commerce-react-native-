import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as LucideIcons from 'lucide-react-native';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

const NothingPage = ({
  icon = 'Heart',
  title = 'No Saved Items!',
  subtitle = "You don't have any saved items.",
  description = 'Go to home and add some.',
  iconSize = 56,
  iconColor = colors.white,
}) => {
  const IconComponent = LucideIcons[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react-native.`);
    return null;
  }

  return (
    <View style={styles.container}>
      <IconComponent size={iconSize} color={iconColor} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  );
};

export default NothingPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    fontSize: 18,
    color: colors.black,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: fonts.fredokaRegular,
    color: colors.gray,
    textAlign: 'center',
    marginVertical: 2,
  },
});

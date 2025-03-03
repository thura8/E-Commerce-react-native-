import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import AccountItems from './AccountItems';
import {t} from 'i18next';

const AccountSection = ({title, data}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <AccountItems
          key={index}
          icon={item.icon}
          title={t(item.title)}
          component={item.component}
          subtitle={t(item.subtitle)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  title: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 22,
    color: colors.purple,
    marginBottom: 16,
  },
});

export default AccountSection;

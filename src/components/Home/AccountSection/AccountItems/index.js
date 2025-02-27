import {StyleSheet, Text, View} from 'react-native';
import * as LucideIcons from 'lucide-react-native';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import ButtonInput from '@components/common/ButtonInput';
import {useNavigation} from '@react-navigation/native';

const AccountItems = ({icon, title, subtitle, component}) => {
  const IconComponent = LucideIcons[icon];

  const navigation = useNavigation();

  return (
    <ButtonInput
      btnCtnStyle={styles.item}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.itemLeft}>
        <View style={styles.iconContainer}>
          {IconComponent && (
            <IconComponent size={24} color={colors.white} strokeWidth={2} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      <LucideIcons.ChevronRight size={20} color={colors.black} />
    </ButtonInput>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.hotPink,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.fredokaRegular,
    fontSize: 18,
    color: colors.black,
  },
  subtitle: {
    fontFamily: fonts.fredokaRegular,
    fontSize: 14,
    color: colors.gray,
    marginTop: 2,
  },
});

export default AccountItems;

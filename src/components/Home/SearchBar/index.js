import {StyleSheet, View} from 'react-native';
import React from 'react';

import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import fonts from '@assets/fonts';
import {Search} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';

const DashboardSearchBar = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <ButtonInput
        btnCtnStyle={styles.searchInputContainer}
        imgStyle={styles.icon}
        btnTxt={t('whatareyoulookingfor?')}
        btnTxtStyle={styles.searchText}
        onPress={() => navigation.navigate('Search')}>
        <Search color={colors.black} />
      </ButtonInput>
    </View>
  );
};

export default DashboardSearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#FCDDE8',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    marginHorizontal: 4,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  icon: {
    width: 22,
    height: 22,
  },
  searchText: {
    marginLeft: 12,
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.montReg,
  },
});

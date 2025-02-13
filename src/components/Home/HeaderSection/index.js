import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

import ButtonInput from '@components/common/ButtonInput';
import {useNavigation} from '@react-navigation/native';
import {Bell, Heart} from 'lucide-react-native';

const DashboardHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.locationTitle}>Location</Text>
        <Text style={styles.locationSubtitle}>Yangon, Myanmar</Text>
      </View>

      <View style={styles.iconContainer}>
        <ButtonInput onPress={() => navigation.navigate('Favorites')}>
          <Heart color={colors.white} strokeWidth={3} />
        </ButtonInput>
        <ButtonInput>
          <Bell color={colors.white} strokeWidth={3} />
        </ButtonInput>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  locationTitle: {
    fontFamily: fonts.fredokaRegular,
    letterSpacing: 2,
    color: colors.black,
    fontSize: 22,
  },
  locationSubtitle: {
    fontFamily: fonts.montReg,
    color: colors.black,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
});

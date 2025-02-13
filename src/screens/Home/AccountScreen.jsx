import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ContainerLayout from '@components/common/ContainerLayout';
import AccountSection from '@components/Home/AccountSection';
import {accountGeneral, accountSetting} from '@constants/common';
import {colors} from '@constants/colors';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContainerLayout
        header
        headerTitle={'My Account'}
        logOutIcon="LogOut"
        leftArrow={false}>
        <AccountSection data={accountGeneral} title={'General'} />
        <AccountSection data={accountSetting} title={'Settings'} />
      </ContainerLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;

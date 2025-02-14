import ContainerLayout from '@components/common/ContainerLayout';
import AccountSection from '@components/Home/AccountSection';
import {accountGeneral, accountSetting} from '@constants/common';

const AccountScreen = () => {
  return (
    <ContainerLayout
      header
      headerTitle={'My Account'}
      logOutIcon="LogOut"
      leftArrow={false}>
      <AccountSection data={accountGeneral} title={'General'} />
      <AccountSection data={accountSetting} title={'Settings'} />
    </ContainerLayout>
  );
};

export default AccountScreen;

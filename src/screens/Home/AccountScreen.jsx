import ContainerLayout from '@components/common/ContainerLayout';
import AccountSection from '@components/Home/AccountSection';
import {accountGeneral, accountSetting} from '@constants/common';
import {useTranslation} from 'react-i18next';

const AccountScreen = () => {
  const {t} = useTranslation();

  return (
    <ContainerLayout
      header
      headerTitle={t('myacc')}
      logOutIcon="LogOut"
      leftArrow={false}>
      <AccountSection data={accountGeneral} title={t('general')} />
      <AccountSection data={accountSetting} title={t('Settings')} />
    </ContainerLayout>
  );
};

export default AccountScreen;

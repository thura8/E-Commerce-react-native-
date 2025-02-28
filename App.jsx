import React from 'react';
import MainNavigator from '@routes/Navigator';
import {Provider} from 'react-redux';
import store from '@store/store';
import {I18nextProvider} from 'react-i18next';
import i18n from '@config/i18n/i18n';
import I18nInitializationWrapper from 'src/util/I18nInitializationWrapper';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <I18nInitializationWrapper>
          <MainNavigator />
        </I18nInitializationWrapper>
      </Provider>
    </I18nextProvider>
  );
};

export default App;

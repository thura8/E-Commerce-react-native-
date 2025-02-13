import React from 'react';
import MainNavigator from '@routes/Navigator';
import {Provider} from 'react-redux';
import store from '@store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;

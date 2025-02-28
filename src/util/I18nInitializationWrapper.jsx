import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import i18n from '@config/i18n/i18n';

const I18nInitializationWrapper = ({children}) => {
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      const handleInitialized = () => setIsReady(true);
      i18n.on('initialized', handleInitialized);
      return () => i18n.off('initialized', handleInitialized);
    }
  }, []);

  if (!isReady) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return children;
};

export default I18nInitializationWrapper;

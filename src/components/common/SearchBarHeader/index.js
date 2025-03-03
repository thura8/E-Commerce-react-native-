import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import {Search} from 'lucide-react-native';

const SearchHeader = ({
  placeholder,
  value,
  onChangeText,
  showIcon = true,
  autoFocus = true,
  containerStyle,
  inputStyle,
}) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.searchContainer, containerStyle]}>
      {showIcon && <Search color={colors.black} style={{marginRight: 14}} />}

      <TextInput
        placeholder={placeholder || t('search ...')}
        placeholderTextColor={colors.gray}
        style={[styles.textInput, inputStyle]}
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChangeText}
        accessibilityLabel="Search input"
        accessibilityHint="Type to search items"
      />
    </View>
  );
};

export default React.memo(SearchHeader);

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.whitePink,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  textInput: {
    fontFamily: fonts.poppinsReg,
    fontSize: 16,
    color: colors.black,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
});

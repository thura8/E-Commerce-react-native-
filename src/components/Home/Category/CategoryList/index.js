import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as LucideIcons from 'lucide-react-native';
import FastImage from 'react-native-fast-image';

import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import {categoryList} from '@constants/common';
import fonts from '@assets/fonts';

const CategoryList = ({category, layout = 'horizontal', onPress}) => {
  const getCategoryIcon = categoryName => {
    return categoryList.find(
      cat => cat.name.toLowerCase() === categoryName.toLowerCase(),
    )?.icon;
  };

  const renderItem = ({item}) => {
    const icon = getCategoryIcon(item.name);

    if (layout === 'horizontal') {
      return (
        <ButtonInput
          btnCtnStyle={styles.horizontalItem}
          icon={icon}
          imgStyle={{width: 24, height: 24}}
          iconSize={20}
          iconColor={colors.white}
          btnTxt={item.name}
          btnTxtStyle={styles.itemText}
          onPress={() => onPress?.(item)}
        />
      );
    }

    const IconComponent =
      icon && typeof icon === 'string' ? LucideIcons[icon] : null;
    return (
      <TouchableOpacity
        style={styles.verticalItem}
        onPress={() => onPress?.(item)}>
        <View style={styles.textContainer}>
          <Text style={styles.categoryTitle}>{item.name}</Text>
          {IconComponent ? (
            <IconComponent size={30} color={colors.white} />
          ) : (
            <FastImage
              source={icon}
              style={{width: 32, height: 32}}
              resizeMode="contain"
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={category}
      horizontal={layout === 'horizontal'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      contentContainerStyle={layout === 'vertical' && styles.verticalList}
    />
  );
};

const styles = StyleSheet.create({
  // Horizontal styles
  horizontalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 10,
    borderRadius: 12,
    backgroundColor: colors.hotPink,
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.fredokaRegular,
    marginLeft: 8,
  },

  // Vertical styles
  verticalList: {
    paddingBottom: 4,
  },
  verticalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.hotPink,
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    overflow: 'hidden',
  },

  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    letterSpacing: 1.4,
    fontFamily: fonts.fredokaSemiBold,
    color: colors.white,
  },
});

export default CategoryList;

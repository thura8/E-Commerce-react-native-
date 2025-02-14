import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

import {formattedMoney} from '@helper/index';
import {useDispatch} from 'react-redux';
import {addToCart} from '@store/actions/actions';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const navigation = useNavigation();

  if (!product) {
    return null;
  }

  return (
    <ButtonInput onPress={() => navigation.navigate('ProductDetails', product)}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: product?.thumbnail,
              priority: 'high',
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={2}>
            {product?.title}
          </Text>
          <View style={styles.ratingContainer}>
            <FastImage
              source={require('@assets/icons/Rating/star.png')}
              style={styles.icon}
            />
            <Text style={styles.rating}>{product?.rating}</Text>
          </View>
          <Text style={styles.price}>{formattedMoney(product?.price)}</Text>
        </View>

        <ButtonInput
          btnCtnStyle={styles.addBtnContainer}
          icon="CirclePlus"
          iconSize={24}
          iconColor="black"
          onPress={handleAddToCart}
        />
      </View>
    </ButtonInput>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 282,
    borderRadius: 32,
    backgroundColor: colors.whitePink,
  },
  imgContainer: {
    flex: 1,
    width: 170,
    marginTop: 8,
    marginHorizontal: 6,
    borderRadius: 22,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
  },
  details: {
    padding: 8,
  },
  title: {
    height: 40,
    fontFamily: fonts.montReg,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
  },
  rating: {
    fontFamily: fonts.poppinsReg,
    fontWeight: '600',
    color: colors.black,
  },
  price: {
    fontFamily: fonts.poppinsReg,
    fontSize: 14,
    color: colors.black,
    fontWeight: '600',
    marginLeft: 7,
  },

  addBtnContainer: {
    backgroundColor: colors.white,
    borderRadius: 24,
    position: 'absolute',
    bottom: 8,
    right: 10,
  },

  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
});

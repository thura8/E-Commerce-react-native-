import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {formattedMoney} from '@helper/index';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import ButtonInput from '@components/common/ButtonInput';
import {useNavigation} from '@react-navigation/native';

const ProductCardRow = ({
  product,
  quantity,
  onQuantityChange,
  onRemove,
  isCart = false,
}) => {
  const handleIncrement = () => onQuantityChange(product.id, quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(product.id, quantity - 1);
    } else {
      onRemove(product.id);
    }
  };

  const isInStock = product?.stock > 0;
  const discountedPrice =
    product?.price * (1 - product?.discountPercentage / 100);

  const navigation = useNavigation();

  return (
    <ButtonInput
      btnCtnStyle={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('ProductDetails', {product})}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: product?.thumbnail || product?.images?.[0]}}
          style={styles.productImage}
          resizeMode="cover"
        />

        {product?.discountPercentage > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              -{product.discountPercentage}%
            </Text>
          </View>
        )}
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.productName} numberOfLines={2}>
            {product?.title}
          </Text>
          <ButtonInput
            icon={isCart ? 'CircleX' : 'Trash2'}
            iconColor="black"
            iconSize={24}
            onPress={() => onRemove(product.id)}
          />
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.brandText}>{product?.brand}</Text>
          <View style={styles.ratingContainer}>
            <FastImage
              source={require('@assets/icons/Rating/yellow_star.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={styles.ratingText}>{product?.rating}</Text>
          </View>
        </View>

        <View style={styles.priceRow}>
          <View>
            {product?.discountPercentage > 0 && (
              <Text style={styles.originalPrice}>
                {formattedMoney(product?.price)}
              </Text>
            )}
            <Text style={styles.discountedPrice}>
              {formattedMoney(discountedPrice)}
            </Text>
          </View>

          {isCart && (
            <View style={styles.quantityWrapper}>
              <ButtonInput
                icon="CircleMinus"
                btnCtnStyle={[
                  styles.quantityButton,
                  !isInStock && styles.disabledButton,
                ]}
                iconColor="black"
                iconSize={24}
                onPress={handleDecrement}
                disabled={!isInStock}
              />
              <Text style={styles.quantityText}>{quantity}</Text>
              <ButtonInput
                icon="CirclePlus"
                btnCtnStyle={[
                  styles.quantityButton,
                  !isInStock && styles.disabledButton,
                ]}
                iconColor="black"
                iconSize={24}
                onPress={handleIncrement}
                disabled={!isInStock}
              />
            </View>
          )}
        </View>

        <Text style={[styles.stockText, !isInStock && styles.outOfStockText]}>
          {isInStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
    </ButtonInput>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 20,
    padding: 12,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  productImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 4,
    backgroundColor: colors.red,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: colors.white,
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 12,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productName: {
    flex: 1,
    fontFamily: fonts.interSemiBold,
    fontSize: 16,
    color: colors.black,
    marginRight: 8,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandText: {
    fontFamily: fonts.fredokaLight,
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: fonts.poppinsReg,
    fontSize: 14,
    color: colors.black,
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  originalPrice: {
    fontFamily: fonts.fredokaLight,
    fontSize: 12,
    color: colors.gray,
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
    color: colors.black,
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    padding: 6,
    backgroundColor: colors.white,
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  quantityText: {
    fontFamily: fonts.interSemiBold,
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 8,
    minWidth: 24,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  stockText: {
    fontFamily: fonts.interSemiBold,
    fontSize: 12,
    color: colors.green,
  },
  outOfStockText: {
    color: colors.red,
  },
});

export default ProductCardRow;

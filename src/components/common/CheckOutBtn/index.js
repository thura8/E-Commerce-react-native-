import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {ChevronDown} from 'lucide-react-native';
import {
  selectSubtotal,
  selectDeliveryFee,
  selectTotalDiscount,
  selectTotal,
  selectTotalOriginalPrice,
} from '@store/selectors';
import {formattedMoney} from '@helper/index';
import {useNavigation} from '@react-navigation/native';
import ButtonInput from '../ButtonInput';

const CheckOutBtn = ({
  subtotal,
  deliveryFee,
  discount,
  total,
  totalOriginalPrice,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const arrowRotation = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const toggleContainer = () => {
    Animated.parallel([
      Animated.spring(animatedValue, {
        toValue: isExpanded ? 1 : 0,
        useNativeDriver: true,
        damping: 15,
        stiffness: 120,
      }),
      Animated.timing(arrowRotation, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => setIsExpanded(!isExpanded));
  };

  const containerTransform = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const arrowTransform = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View
      style={[
        styles.checkoutContainer,
        {transform: [{translateY: containerTransform}], zIndex: 10},
      ]}>
      <ButtonInput
        btnCtnStyle={styles.arrowButton}
        onPress={toggleContainer}
        activeOpacity={0.8}>
        <Animated.View style={{transform: [{rotate: arrowTransform}]}}>
          <ChevronDown color={colors.black} />
        </Animated.View>
      </ButtonInput>

      <View style={styles.priceDetailsContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>{formattedMoney(totalOriginalPrice)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Delivery Fee:</Text>
          <Text style={styles.value}>{formattedMoney(deliveryFee)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Discount:</Text>
          <Text style={[styles.value, {color: colors.red}]}>
            -{formattedMoney(discount)}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>{formattedMoney(total)}</Text>
        </View>
      </View>

      <ButtonInput
        activeOpacity={0.9}
        btnCtnStyle={styles.checkoutButton}
        onPress={() => navigation.navigate('CheckOut')}>
        <LinearGradient
          colors={[colors.hotPink, colors.lightPink]}
          style={styles.gradientBackground}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </LinearGradient>
      </ButtonInput>
    </Animated.View>
  );
};

const mapStateToProps = state => ({
  subtotal: selectSubtotal(state),
  deliveryFee: selectDeliveryFee(state),
  discount: selectTotalDiscount(state),
  total: selectTotal(state),
  totalOriginalPrice: selectTotalOriginalPrice(state),
});

export default connect(mapStateToProps)(CheckOutBtn);

const styles = StyleSheet.create({
  checkoutContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.primaryBlue,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    paddingBottom: 16,
  },
  arrowButton: {
    position: 'absolute',
    top: -38,
    right: 16,
    alignSelf: 'center',
    zIndex: 2,
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  topArrowIcon: {
    width: 24,
    height: 24,
    tintColor: colors.black,
  },
  priceDetailsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontFamily: fonts.poppinsReg,
    fontSize: 16,
    color: colors.grayDark,
  },
  value: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
    color: colors.black,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginVertical: 8,
  },
  totalLabel: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    color: colors.black,
  },
  totalValue: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    color: colors.gray,
  },
  checkoutButton: {
    borderRadius: 24,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  gradientBackground: {
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 18,
    color: colors.white,
    letterSpacing: 0.8,
  },
});

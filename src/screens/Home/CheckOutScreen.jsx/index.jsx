import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import FastImage from 'react-native-fast-image';
import {CreditCard, MoreVertical} from 'lucide-react-native';
import {styles} from './styles';
import {paymentOptions} from '@constants/common';
import {colors} from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import ButtonInput from '@components/common/ButtonInput';
import {formattedMoney} from '@helper/index';
import {
  selectSubtotal,
  selectDeliveryFee,
  selectTotalDiscount,
  selectTotal,
  selectTotalOriginalPrice,
} from '@store/selectors';
import {connect} from 'react-redux';

const CheckOutScreen = ({subtotal, deliveryFee, discount, total}) => {
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const {navigate} = useNavigation();

  return (
    <ContainerLayout header headerTitle="Checkout">
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>

        <View style={styles.paymentOptions}>
          {paymentOptions.map((option, index) => (
            <ButtonInput
              key={index}
              btnCtnStyle={[
                styles.paymentOption,
                selectedPayment === option.name && styles.selectedPayment,
              ]}
              onPress={() => setSelectedPayment(option.name)}>
              <FastImage source={option.image} style={styles.paymentIcon} />
              <View style={styles.radioButton}>
                {selectedPayment === option.name && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </ButtonInput>
          ))}
        </View>

        <View style={styles.cardDisplay}>
          <View style={styles.cardHeader}>
            <CreditCard color="#fff" size={24} />
            <MoreVertical color="#fff" size={24} />
          </View>
          <Text style={styles.cardNumber}>5698 5624 6786 9979</Text>
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.cardLabel}>Card Holder</Text>
              <Text style={styles.cardName}>Name Here</Text>
            </View>
            <FastImage
              source={require('@assets/images/payment_options/mastercard.png')}
              style={styles.cardLogo}
            />
          </View>
        </View>

        <View style={styles.cardForm}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            placeholderTextColor={colors.white}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Holder"
            placeholderTextColor={colors.white}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Exp date"
              placeholderTextColor={colors.white}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              placeholderTextColor={colors.white}
            />
          </View>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{formattedMoney(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>
              {formattedMoney(deliveryFee)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={styles.summaryValue}>-{formattedMoney(discount)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{formattedMoney(total)}</Text>
          </View>

          <ButtonInput onPress={() => navigate('NothingPage')}>
            <LinearGradient
              colors={[colors.hotPink, colors.lightPink]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.placeOrderButton}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </LinearGradient>
          </ButtonInput>
        </View>
      </View>
    </ContainerLayout>
  );
};
const mapStateToProps = state => ({
  subtotal: selectSubtotal(state),
  deliveryFee: selectDeliveryFee(state),
  discount: selectTotalDiscount(state),
  total: selectTotal(state),
  totalOriginalPrice: selectTotalOriginalPrice(state),
});

export default connect(mapStateToProps)(CheckOutScreen);

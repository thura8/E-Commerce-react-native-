import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import FastImage from 'react-native-fast-image';
import {CreditCard, MoreVertical} from 'lucide-react-native';
import {styles} from './styles';
import {paymentOptions} from '@constants/common';
import {colors} from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const CheckOutScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState('visa');

  return (
    <ContainerLayout header headerTitle="Checkout">
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>

        <View style={styles.paymentOptions}>
          {paymentOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
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
            </TouchableOpacity>
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
            <Text style={styles.summaryValue}>$235.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>$24.36</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={styles.summaryValue}>-$20.00</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$239.36</Text>
          </View>
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={[colors.hotPink, colors.purple]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.placeOrderButton}>
            <Text style={styles.placeOrderText}>Place Order</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ContainerLayout>
  );
};

export default CheckOutScreen;

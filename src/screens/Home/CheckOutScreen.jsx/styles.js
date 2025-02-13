import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.fredokaSemiBold,
    letterSpacing: 0.8,
    color: colors.black,
    marginBottom: 16,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentOption: {
    width: '30%',
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedPayment: {
    borderWidth: 2,
    borderColor: colors.hotPink,
  },
  paymentIcon: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.hotPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  cardDisplay: {
    backgroundColor: colors.purple,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cardNumber: {
    color: colors.white,
    fontFamily: fonts.interSemiBold,
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 30,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: colors.lightGray,
    fontSize: 12,
    marginBottom: 5,
  },
  cardName: {
    color: colors.white,
    fontSize: 17,
  },
  cardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  cardForm: {
    gap: 15,
  },
  input: {
    fontFamily: fonts.fredokaRegular,
    backgroundColor: colors.purple,
    borderRadius: 10,
    padding: 15,
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
  },
  halfInput: {
    flex: 1,
  },
});

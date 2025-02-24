import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: fonts.fredokaRegular,
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: fonts.fredokaRegular,
    color: colors.black,
    backgroundColor: colors.whitePink,
  },
  button: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
    borderRadius: 16,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 18,
    color: colors.white,
  },
});

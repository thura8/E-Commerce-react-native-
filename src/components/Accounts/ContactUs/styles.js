import {StyleSheet} from 'react-native';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  form: {
    marginBottom: 32,
  },
  label: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.fredokaSemiBold,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.whitePink,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.fredokaSemiBold,
    letterSpacing: 0.6,
    marginLeft: 8,
  },
  contactInfo: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: fonts.fredokaSemiBold,
    color: colors.black,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: colors.darkGray,
    marginLeft: 12,
  },
  socialLinks: {
    marginBottom: 32,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIconsContainer: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 12,
  },
});

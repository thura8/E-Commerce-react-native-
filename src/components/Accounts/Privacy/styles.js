import {StyleSheet} from 'react-native';
import fonts from '@assets/fonts';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.fredokaSemiBold,
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.fredokaSemiBold,
    marginLeft: 8,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 14,
    color: colors.darkGray,
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.purple,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: colors.red,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: colors.green,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 14,
  },
  saveButtonText: {
    color: colors.white,
    fontFamily: fonts.interReg,
    fontSize: 18,
    fontWeight: '600',
  },
});

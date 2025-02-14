import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

import fonts from '@assets/fonts';
import {colors} from '@constants/colors';
import ButtonInput from '../ButtonInput';

const ConfirmationModal = ({
  visible,
  onCancel,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  checkout = false,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <ButtonInput
              btnCtnStyle={styles.cancelButton}
              onPress={onCancel}
              btnTxt={cancelText}
              btnTxtStyle={styles.cancelText}
            />
            <ButtonInput
              btnCtnStyle={[
                styles.confirmButton,
                {backgroundColor: checkout ? colors.hotPink : colors.red},
              ]}
              onPress={onConfirm}
              btnTxt={confirmText}
              btnTxtStyle={styles.confirmText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.poppinsReg,
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10,
  },
  message: {
    fontFamily: fonts.interReg,
    fontSize: 17,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 10,

    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelText: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 16,
    color: colors.black,
  },
  confirmText: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 16,
    color: colors.white,
  },
});

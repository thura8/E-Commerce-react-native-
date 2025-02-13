import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import ButtonInput from '@components/common/ButtonInput';
import ConfirmationModal from '../CofirmationModal';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';
import {LogOutIcon, ShoppingCart} from 'lucide-react-native';

const Header = ({title, showLeft, cartIcon, logOutIcon}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const cartItemCount = useSelector(state => state.cart.cartItems.length);

  const handleLogOut = () => setModalVisible(true);
  const handleCancel = () => setModalVisible(false);
  const handleConfirm = () => {
    setModalVisible(false);
    console.log('Logged Out');
  };

  return (
    <View style={styles.container}>
      {showLeft && (
        <ButtonInput
          icon="MoveLeft"
          iconSize={28}
          btnCtnStyle={styles.backButton}
          onPress={navigation.goBack}
        />
      )}
      <Text style={styles.text}>{title}</Text>

      {(logOutIcon || cartIcon) && (
        <View style={styles.iconContainer}>
          {logOutIcon ? (
            <TouchableOpacity onPress={handleLogOut}>
              <LogOutIcon color={colors.white} strokeWidth={3} />
            </TouchableOpacity>
          ) : (
            <ShoppingCart color={colors.white} size={28} strokeWidth={3} />
          )}
          {cartIcon && cartItemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
          )}
        </View>
      )}

      <ConfirmationModal
        visible={isModalVisible}
        title="Logout"
        message="Are you sure you want to log out?"
        confirmText="Log out"
        cancelText="Cancel"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'box-none',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 0,
    zIndex: 10,
  },
  iconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    fontFamily: fonts.fredokaSemiBold,
    fontSize: 24,
    letterSpacing: 2,
    color: colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 8,
    zIndex: 10,
  },
  badge: {
    position: 'absolute',
    top: -14,
    right: -13,
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: fonts.interBold,
  },
});

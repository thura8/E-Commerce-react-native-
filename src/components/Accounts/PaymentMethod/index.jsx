import {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {CreditCard, Plus, Check, X} from 'lucide-react-native';

import ContainerLayout from '@components/common/ContainerLayout';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';
import {styles} from './styles';

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([
    {id: '1', last4: '4242', brand: 'Visa', isDefault: true},
    {id: '2', last4: '5555', brand: 'Mastercard', isDefault: false},
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({number: '', expiry: '', cvc: ''});

  const handleSetDefault = id => {
    setPaymentMethods(
      paymentMethods.map(method => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
  };

  const handleRemoveCard = id => {
    Alert.alert('Remove Card', 'Are you sure you want to remove this card?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Remove',
        onPress: () => {
          setPaymentMethods(paymentMethods.filter(method => method.id !== id));
        },
      },
    ]);
  };

  const handleAddCard = () => {
    const newId = (paymentMethods.length + 1).toString();
    const last4 = newCard.number.slice(-4);
    setPaymentMethods([
      ...paymentMethods,
      {
        id: newId,
        last4,
        brand: 'New Card',
        isDefault: false,
      },
    ]);
    setNewCard({number: '', expiry: '', cvc: ''});
    setShowAddCard(false);
  };

  return (
    <ContainerLayout header headerTitle="Payment Methods">
      {paymentMethods.map(method => (
        <View key={method.id} style={styles.cardItem}>
          <View style={styles.cardInfo}>
            <CreditCard color={colors.hotPink} size={24} />
            <Text style={styles.cardText}>
              {method.brand} •••• {method.last4}
            </Text>
          </View>
          <View style={styles.cardActions}>
            {!method.isDefault && (
              <ButtonInput
                onPress={() => handleSetDefault(method.id)}
                btnTxt={'Set as Default'}
                btnTxtStyle={styles.actionText}
              />
            )}
            {method.isDefault && (
              <View style={styles.defaultBadge}>
                <Check color={colors.white} size={12} />
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
            <ButtonInput onPress={() => handleRemoveCard(method.id)}>
              <X color={colors.red} size={20} />
            </ButtonInput>
          </View>
        </View>
      ))}

      {!showAddCard && (
        <ButtonInput
          btnCtnStyle={styles.addButton}
          onPress={() => setShowAddCard(true)}
          btnTxt={'Add New Card'}
          btnTxtStyle={styles.addButtonText}>
          <Plus color={colors.white} size={20} />
        </ButtonInput>
      )}

      {showAddCard && (
        <View style={styles.addCardForm}>
          <Text style={styles.formTitle}>Add New Card</Text>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={newCard.number}
            onChangeText={text => setNewCard({...newCard, number: text})}
            keyboardType="numeric"
          />
          <View style={styles.rowInputs}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="MM/YY"
              value={newCard.expiry}
              onChangeText={text => setNewCard({...newCard, expiry: text})}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVC"
              value={newCard.cvc}
              onChangeText={text => setNewCard({...newCard, cvc: text})}
              keyboardType="numeric"
            />
          </View>
          <ButtonInput
            btnCtnStyle={styles.submitButton}
            onPress={handleAddCard}
            btnTxt={'Add Card'}
            btnTxtStyle={styles.submitButtonText}
          />
        </View>
      )}
    </ContainerLayout>
  );
}

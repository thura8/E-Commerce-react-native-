import {useNavigation} from '@react-navigation/native';
import {formatMoney} from 'accounting-js';

export const formattedMoney = amount =>
  amount
    ? formatMoney(amount, {
        symbol: '$',
        precision: 2,
        thousand: ',',
        decimal: '.',
        format: '%s%v',
      })
    : undefined;

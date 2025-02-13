import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as LucideIcons from 'lucide-react-native';

const ButtonInput = ({
  children,
  icon,
  icon2,
  btnTxt,
  btnTxtStyle,
  btnCtnStyle,
  imgStyle,
  iconSize = 20,
  iconColor = 'white',
  onPress,
}) => {
  const renderIcon = iconProp => {
    if (!iconProp) return null;

    if (typeof iconProp === 'string') {
      const IconComponent = LucideIcons[iconProp];
      if (!IconComponent) {
        console.warn(`Icon "${iconProp}" not found in lucide-react-native.`);
        return null;
      }
      return <IconComponent size={iconSize} color={iconColor} />;
    } else {
      return (
        <FastImage source={iconProp} style={imgStyle} resizeMode="contain" />
      );
    }
  };

  return (
    <TouchableOpacity style={btnCtnStyle} onPress={onPress}>
      {renderIcon(icon)}
      {children}
      {btnTxt && <Text style={btnTxtStyle}>{btnTxt}</Text>}
      {renderIcon(icon2)}
    </TouchableOpacity>
  );
};

export default ButtonInput;

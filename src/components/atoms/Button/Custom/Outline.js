import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as ButtonRNE} from '@rneui/themed';
import {
  colors,
  fontStyle,
  mergeObj,
  setDefaultPropsData,
} from '../../../../utils';

export default function Outline(props) {
  const baseColor = setDefaultPropsData(props?.baseColor, colors.primary);
  const buttonStyle = mergeObj(
    styles.buttonStyle(baseColor),
    props?.buttonStyle,
  );
  const titleStyle = mergeObj(styles.titleStyle(baseColor), props?.titleStyle);

  return (
    <ButtonRNE {...props} buttonStyle={buttonStyle} titleStyle={titleStyle} />
  );
}

const styles = StyleSheet.create({
  buttonStyle: (color) => ({
    borderRadius: 10,
    borderColor: color,
    borderWidth: 2,
  }),
  titleStyle: (color) => ({...fontStyle.normal(), color: color}),
});

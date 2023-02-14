import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HandleDeviceBack, Text} from '../../atoms';
import {colors, setDefaultPropsData} from '../../../utils';
import {HEADER_HEIGHT} from '../../../parameters';

export default function Default(props) {
  const title = setDefaultPropsData(props?.title, '');

  return (
    <View style={styles.container}>
      <HandleDeviceBack />
      <Text size={16} type="bold" color={colors?.text.white}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
});

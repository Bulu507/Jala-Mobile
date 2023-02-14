import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, HandleDeviceBack, Icon, Text} from '../../atoms';
import {colors, setDefaultPropsData} from '../../../utils';
import {HEADER_HEIGHT, ICON} from '../../../parameters';

export default function Back(props) {
  const title = setDefaultPropsData(props?.title, '');

  return (
    <View style={styles.container}>
      <HandleDeviceBack type="back" action={props?.onPress} />
      <View style={styles.left}>
        <Icon
          type={ICON.ION}
          name="ios-arrow-back-outline"
          color={colors.white}
          onPress={props?.onPress}
        />
        <Gap width={15} />
        <Text size={16} type="bold" color={colors?.text.white}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {alignItems: 'center', flexDirection: 'row'},
});

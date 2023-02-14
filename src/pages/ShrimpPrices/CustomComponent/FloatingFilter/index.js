import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, globalStyle} from '../../../../utils';
import {Gap, Icon, Text} from '../../../../components';
import {ICON} from '../../../../parameters';
import {useSelector} from 'react-redux';

export default function FloatingFilter(props) {
  const {size} = useSelector((x) => x.filterShrimpPrice);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.size} onPress={props?.onSizePress}>
        <Icon type={ICON.MDC} name={'scale'} color={colors.white} size={18} />
        <Gap width={10} />
        <View>
          <Text color={colors.white} size={10}>
            Size
          </Text>
          <Text color={colors.white} type="bold">
            {size}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.location}
        onPress={props?.onLocationPress}>
        <Icon
          type={ICON.MDC}
          name={'map-marker'}
          color={colors.white}
          size={18}
        />
        <Gap width={10} />
        <Text color={colors.white}>FloatingFilter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 15,
    borderRadius: 50,
    flexDirection: 'row',
    ...globalStyle.shadow,
  },
  size: {
    flex: 1,
    backgroundColor: colors.dark,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
  location: {
    flex: 2,
    backgroundColor: colors.light,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
});

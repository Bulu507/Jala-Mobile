import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import {setDefaultData} from '../data';
import {fonts} from '../fonts';

export const globalStyle = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export const fontStyle = StyleSheet.create({
  bold: (size, color) => ({
    fontFamily: fonts.primary.bold,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.default),
    flexShrink: 1,
  }),
  normal: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.default),
    flexShrink: 1,
  }),
  danger: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.danger),
    flexShrink: 1,
  }),
  tertiary: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.tertiary),
    flexShrink: 1,
  }),
});

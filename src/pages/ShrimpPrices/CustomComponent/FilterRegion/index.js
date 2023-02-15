import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomSheet} from '@rneui/themed';
import {colors} from '../../../../utils';
import {WINDOW_HEIGHT} from '../../../../parameters';
import {Text} from '../../../../components';
import Head from './Head';

export default function FilterRegion(props) {
  return (
    <BottomSheet isVisible={props?.isVisible} onBackdropPress={props?.close}>
      <View style={styles.box}>
        <Head onPress={() => props?.onClose()} />
        <Text>FilterRegion</Text>
      </View>
    </BottomSheet>
  );
}

const height = (WINDOW_HEIGHT * 80) / 100;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height,
  },
  head: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  scrollView: {
    flexGrow: 1,
  },
});

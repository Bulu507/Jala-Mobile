import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils';

export default function Head(props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text type="bold" size={15}>
          Size
        </Text>
        <TouchableOpacity onPress={props?.close}>
          <Text type="bold" color={colors.primary}>
            Tutup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  head: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
});

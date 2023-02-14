import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TabView} from '@rneui/themed';

export default function ShrimpNewsTab() {
  return (
    <TabView.Item style={styles.container}>
      <Text>ShrimpNewsPage</Text>
    </TabView.Item>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

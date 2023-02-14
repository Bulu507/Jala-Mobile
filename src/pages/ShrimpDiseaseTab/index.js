import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TabView} from '@rneui/themed';

export default function ShrimpDiseaseTab() {
  return (
    <TabView.Item style={styles.container}>
      <Text>ShrimpDiseaseTab</Text>
    </TabView.Item>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

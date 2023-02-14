import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TabView} from '@rneui/themed';
import {FilterSize, FloatingFilter} from '../CustomComponent';
import {ListSize} from '../../../parameters';

export default function ListShrimpTab() {
  const [showFilterSize, setShowFilterSize] = useState(false);

  return (
    <>
      <FilterSize
        isVisible={showFilterSize}
        close={() => setShowFilterSize(false)}
      />
      <TabView.Item style={styles.container}>
        <View style={styles.content}>
          <FloatingFilter
            onSizePress={() => setShowFilterSize(true)}
            onLocationPress={() => {}}
          />
          <Text>ListShrimpPage</Text>
        </View>
      </TabView.Item>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1},
});

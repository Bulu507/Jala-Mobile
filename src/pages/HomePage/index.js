import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontStyle, globalStyle} from '../../utils';
import {Header} from '../../components';
import {Tab, TabView} from '@rneui/themed';
import {titleHomeTab} from '../../parameters';
import {ListShrimpTab} from '../ShrimpPrices';
import ShrimpNewsTab from '../ShrimpNewsTab';
import ShrimpDiseaseTab from '../ShrimpDiseaseTab';

export default function HomePage({navigation}) {
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <View style={globalStyle.page}>
      <Header title={'Jala Media'} />
      <Tab
        value={menuIndex}
        onChange={setMenuIndex}
        containerStyle={{paddingVertical: 10}}
        dense
        indicatorStyle={styles.indicator}>
        {titleHomeTab.map((title, idx) => {
          return (
            <Tab.Item key={idx} titleStyle={(x) => styles.title(x)}>
              {title}
            </Tab.Item>
          );
        })}
      </Tab>
      <TabView value={menuIndex} onChange={setMenuIndex} animationType="spring">
        <ListShrimpTab />
        <ShrimpNewsTab />
        <ShrimpDiseaseTab />
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: (active) =>
    active
      ? {...fontStyle.bold(), color: colors.light}
      : {...fontStyle.normal(), color: colors.text.default},
  indicator: {backgroundColor: colors.light, height: 5},
});

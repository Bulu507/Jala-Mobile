import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomSheet} from '@rneui/themed';
import {colors} from '../../../../utils';
import {ListSize, WINDOW_HEIGHT} from '../../../../parameters';
import {Text} from '../../../../components';
import {useDispatch} from 'react-redux';
import {setFilterShrimPrice} from '../../../../config';

export default function FilterSize(props) {
  const dispatch = useDispatch();

  const setForm = (value) => {
    dispatch(setFilterShrimPrice('size', value));
  };

  const handleOnPress = (value) => {
    props.close();
    setForm(value);
  };

  return (
    <BottomSheet isVisible={props?.isVisible} onBackdropPress={props?.close}>
      <View style={styles.box}>
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          {ListSize.map((item) => {
            return (
              <ListItem
                key={item}
                value={item}
                onPress={() => handleOnPress(item)}
              />
            );
          })}
        </ScrollView>
      </View>
    </BottomSheet>
  );
}

const ListItem = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemBox} onPress={onPress}>
      <Text size={15}>{value}</Text>
    </TouchableOpacity>
  );
};

const height = (WINDOW_HEIGHT * 80) / 100;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: height,
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
  itemBox: {paddingHorizontal: 20, paddingBottom: 20},
});

import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomSheet} from '@rneui/themed';
import {colors} from '../../../../utils';
import {ListSize, WINDOW_HEIGHT} from '../../../../parameters';
import {Text} from '../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterShrimPrice} from '../../../../config';
import {isEqual} from 'lodash';

export default function FilterSize(props) {
  const dispatch = useDispatch();
  const {size} = useSelector((x) => x.filterShrimpPrice);

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
            let onFocused = isEqual(item, size);
            return (
              <ListItem
                key={item}
                value={item}
                onFocused={onFocused}
                onPress={() => handleOnPress(item)}
              />
            );
          })}
        </ScrollView>
      </View>
    </BottomSheet>
  );
}

const ListItem = ({value, onPress, onFocused}) => {
  const textColor = onFocused ? colors?.text.white : colors.text.default;
  const fontWeight = onFocused ? 'bold' : null;
  return (
    <TouchableOpacity style={styles.itemBox(onFocused)} onPress={onPress}>
      <Text size={15} color={textColor} type={fontWeight}>
        {value}
      </Text>
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
  itemBox: (onFocused) => ({
    padding: 15,
    backgroundColor: onFocused ? colors.backdrop.blue1 : null,
    justifyContent: 'center',
  }),
});

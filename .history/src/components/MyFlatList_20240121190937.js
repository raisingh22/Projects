import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyFlatList = ({data, renderItem = (item, index) => {}}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => renderItem(item, index)} 
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

export default MyFlatList;

const styles = StyleSheet.create({
  list: {},
});

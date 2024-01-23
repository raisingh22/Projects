import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyFlatList = ({data, renderItem = (item, index) => {}, bounces}) => {
  return (
    <FlatList
      bounces={bounces}
      data={data}
      pagingEnabled={pa}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

export default MyFlatList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 5,
    // flex: 1, // Example: Expand the FlatList to fill available space
    // backgroundColor: 'lightgray', // Example: Set background color
    // height:"50%"
  },
});

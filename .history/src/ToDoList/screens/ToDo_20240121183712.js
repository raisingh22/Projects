import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const ToDo = () => {
  return (
    <View s>
      <Text>ToDo List</Text>
      <TextInput placeholder="To do List" style={styles.textInput} />
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height:50,
    marginVertical: 20,
    borderWidth: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    borderColor:'#40bdd4'
  },
});

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MyBtn from '../../components/MyBtn';

const ToDo = () => {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <Text>ToDo List</Text>
      <TextInput
        placeholder="Add a Task"
        placeholderTextColor={'grey'}
        style={styles.textInput}
      />
      <MyBtn
        text={'Add me'}
       btnStyle={{backgroundColor:'green'}}
       textStyle={{
        f
       }}
      />
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    marginVertical: 20,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    borderColor: '#40bdd4',
    borderRadius: 10,
  },
});

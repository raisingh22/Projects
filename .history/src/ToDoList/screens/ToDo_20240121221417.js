import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MyBtn from '../../components/MyBtn';
import MyFlatList from '../../components/MyFlatList';
import Icon from 'react-native-vector-icons/Ionicons'
// import {IconButton} from 'react-native-paper';
const DummyData = [
  {
    id: '1',
    name: 'Wash Car',
  },
  {
    id: '2',
    name: 'Dusting',
  },
];
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
        text={'Add Task'}
        btnStyle={{backgroundColor: '#291c1a'}}
        textStyle={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
      />
      <MyFlatList
        data={DummyData}
        // bounces={false}
        renderItem={(item, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: index % 2 === 0 ? '#19f0a5' : 'pink',
              padding: 15,
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 19,
                color:'black'
              }}>
              {item.name}
            </Text>
            <Icon name="pencil" size={25}/>
            <Icon name="bin" size={25}/>
          </View>
        )}
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

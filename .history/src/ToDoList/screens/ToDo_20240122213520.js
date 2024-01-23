import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyBtn from '../../components/MyBtn';
import MyFlatList from '../../components/MyFlatList';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Fallback from '../../components/Fallback';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

const ToDo = () => {
  const [toDo, setToDo] = useState('');
  const [data, setData] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    getTodo();
  }, [isFocused]);

  const saveTodo = () => {
    const todoId = 'todos'; // Use a fixed ID for the document
    firestore()
      .collection('todo')
      .doc(todoId)
      .set({
        id: todoId,
        title: toDo,
      })
      .then(() => {
        console.log('Todo updated!');
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const handleAdd = () => {
    if (toDo === '') {
      return;
    }
    setToDo('');
    saveTodo();
    getTodo();
  };
  
  const handleEdit = toDo => {
    setEditTodo(toDo);
    setToDo(toDo.title);
  };
  const getTodo = () => {
    firestore()
      .collection('todo')
      .get()
      .then(snapshot => {
        let temp = [];
        snapshot.docs.map((item, index) => {
          console.log(item.data(), item.id);
          temp.push({...item.data(), id: item.id});
        });
        setData(temp);
      });
  };
  const handleUpdate = () => {
    const updateTodo = data.map(item => {
      if (item.id === editTodo.id) {
        return {...item, title: toDo};
      }
      return item;
    });
    setData(updateTodo);
    setEditTodo(null);
    setToDo('');
  };
  const filterItem = (item, index) => {
    if (toDo === '') {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderWidth: 1,
            marginVertical: 5,
            borderRadius: 10,
            marginHorizontal: 10,
            backgroundColor: index % 2 === 0 ? '#d4a7a1' : '#1cd9cf',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 19,
              color: 'black',
              flex: 1,
            }}>
            {item.title}
          </Text>
          <Icon
            name="pencil"
            size={25}
            style={{
              marginHorizontal: 10,
            }}
            onPress={() => handleEdit(item)}
          />
          <Icons
            name="delete"
            size={25}
            onPress={() => handleDeleteTodo(item.id)}
          />
        </View>
      );
    }
    if (item.title.toLowerCase().includes(toDo.toLowerCase())) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderWidth: 1,
            marginVertical: 5,
            borderRadius: 10,
            marginHorizontal: 10,
            backgroundColor: index % 2 === 0 ? '#d4a7a1' : '#1cd9cf',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 19,
              color: 'black',
              flex: 1,
            }}>
            {item.title}
          </Text>
          <Icon
            name="pencil"
            size={25}
            style={{
              marginHorizontal: 10,
            }}
            onPress={() => handleEdit(item)}
          />
          <Icons
            name="delete"
            size={25}
            onPress={() => handleDeleteTodo(item.id)}
          />
        </View>
      );
    }
  };
  const handleDeleteTodo = id => {
    const updateTodo = data.filter(toDo => toDo.id !== id);
    setData(updateTodo);
    
    console.log(data.length);
  };
  return (
    <View
      style={{
        margin: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
        }}>
        ToDo List
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#40bdd4',
          borderRadius: 10,
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Add a Task"
          placeholderTextColor={'grey'}
          style={styles.textInput}
          value={toDo}
          onChangeText={text => setToDo(text)}
        />
        <Icon
          name="search"
          size={25}
          color="black"
          style={{
            marginHorizontal: 10,
          }}
          onPress={() => Alert.alert('press')}
        />
      </View>
      {editTodo ? (
        <MyBtn
          text={'Edit Task'}
          onPress={() => handleUpdate()}
          btnStyle={{backgroundColor: '#291c1a'}}
          textStyle={{
            fontSize: 15,
            fontWeight: 'bold',
          }}
        />
      ) : (
        <MyBtn
          text={'Add Task'}
          onPress={() => handleAdd()}
          btnStyle={{backgroundColor: '#291c1a'}}
          textStyle={{
            fontSize: 15,
            fontWeight: 'bold',
          }}
        />
      )}
      <MyFlatList data={data} renderItem={(item, index) => filterItem(item)} />
      {data.length <= 0 && <Fallback />}
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 50,
    // marginVertical: 20,
    // borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,

    color: 'red',
  },
});

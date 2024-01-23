import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import MyBtn from '../../components/MyBtn';
import MyFlatList from '../../components/MyFlatList';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Fallback from '../../components/Fallback';

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
  const [toDo, setToDo] = useState('');
  const [data, setData] = useState([]);
  const [editTodo , setEditTodo] = useState(null);

  const handleAdd = () => {
    if(toDo === ''){
        return
    }
    setData([
      ...data,
      {
        id: Date.now(),
        title: toDo,
      },
    ]);
  };
  const handleEdit = toDo =>{

    setEditTodo(toDo)
    setToDo(toDo.title)

  }
  const handleUpdate = ()=>{
    const updateTodo = data.map((item)=>{
        if(item.id === editTodo.id) {
            return {...item, title: toDo}
        }
        return item

    })
    setData(updateTodo)
    setEditTodo(null)
    setToDo('')

  }
  const filterItem =(item ,index)=>{
  return ()
  

  }
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
      <Text style={{
        textAlign:'center',
        fontSize:20
      }}>ToDo List</Text>
      <View style={{
        flexDirection:'row',
        width:"100%",
        alignItems:'center',
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
              color='black'
              style={{
                marginHorizontal: 10,
              }}
              onPress={() =>Alert.alert('press')}
            />
      </View>
       {
        editTodo ? 
        <MyBtn
        text={'Edit Task'}
        onPress={() => handleUpdate()}
        btnStyle={{backgroundColor: '#291c1a'}}
        textStyle={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
      /> :
      <MyBtn
        text={'Add Task'}
        onPress={() => handleAdd()}
        btnStyle={{backgroundColor: '#291c1a'}}
        textStyle={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
      />
      }
      <MyFlatList
        data={data}
        renderItem={(item, index) => (
          filterItem()
        )}
      />
      {
        data.length <=0 && <Fallback/>
      }
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

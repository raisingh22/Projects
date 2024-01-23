import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CRUDComponent = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore().collection('items').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(items);
    };

    fetchData();
  }, []);

  const addData = async () => {
    if (text.trim() !== '') {
      await firestore().collection('items').add({ text });
      setText('');
      fetchData();
    }
  };

  const updateData = async () => {
    if (text.trim() !== '') {
      await firestore().collection('items').doc(editItemId).update({ text });
      setText('');
      setEditMode(false);
      setEditItemId('');
      fetchData();
    }
  };

  const deleteData = async (id) => {
    await firestore().collection('items').doc(id).delete();
    fetchData();
  };

  const editData = (id, text) => {
    setEditMode(true);
    setEditItemId(id);
    setText(text);
  };

  const fetchData = async () => {
    const snapshot = await firestore().collection('items').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={(inputText) => setText(inputText)}
      />
      {editMode ? (
        <Button title="Update" onPress={updateData} />
      ) : (
        <Button title="Add" onPress={addData} />
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Edit" onPress={() => editData(item.id, item.text)} />
            <Button title="Delete" onPress={() => deleteData(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default CRUDComponent;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import MyBtn from '../../components/MyBtn'
const Home = () => {
    const sace= ()=>{
        firestore()
  .collection('Users')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  }).catch((err)=>{
    console.log(err);
  })
    }
  return (
    <View>
      <Text>Home</Text>
      <MyBtn 
      onPress={()sace()}
      text={'add '}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
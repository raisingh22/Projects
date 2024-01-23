import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyFlatList = ({data}) => {
  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    />
  )
}

export default MyFlatList

const styles = StyleSheet.create({})
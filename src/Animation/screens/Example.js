import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
import {useNavigation , useIsFocused} from '@react-navigation/native';
const Example = () => {
  const isFocused =useIsFocused();
  const navigation = useNavigation();
  // useEffect(() => {
  // }, [isFocused])
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'white'
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
        <StatusBar
        translucent 
        barStyle={'dark-content'}
        backgroundColor={'transparent'} 
        />
      <Animatable.Image
        source={require('../../asstes/images.jpeg')}
        style={{
          width: 300,
          height: 300,
          marginLeft: -40,
          marginTop: -70,
        }}
        animation={'zoomIn'}
        duration={2000}
      />
      <Animatable.Image
        source={require('../../asstes/dd.jpeg')}
        style={{
          width: 250,
          height: 250,
          //   borderWidth:1,
          marginRight: -90,
          alignSelf: 'flex-end',
          //   marginTop: -140,
        }}
        animation={'zoomIn'}
        duration={2000}
      />
      <Animatable.Image
        source={require('../../asstes/op.png')}
        style={{
          width: 150,
          height: 150,
          //   marginRight: -90,
          alignSelf: 'center',
          marginTop: -50,
        }}
        animation={'tada'}
        duration={2000}
      />
      <Animatable.Text
        style={{
          fontSize: 24,
          textAlign: 'center',
        }}
        animation={'zoomIn'}
        duration={2000}>
        Food App
      </Animatable.Text>
      <AnimatedButton
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 10,
          marginHorizontal: 10,
          marginTop: 15,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          width: '90%',
        }}
        activeOpacity={0.2}
        // animation={'zoomIn'}
        duration={2000}
        onPress={() => 
          navigation.navigate('Example2')
        }>
        <Text
          style={{
            fontSize: 34,
            textAlign: 'center',
            color: 'white',
          }}>
          prees me
        </Text>
      </AnimatedButton>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({});

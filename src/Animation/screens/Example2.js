import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {useNavigation ,useIsFocused} from '@react-navigation/native';

const AnimatedButton =Animatable.createAnimatableComponent(TouchableOpacity)
const Example2 = () => {
  const isFocused =useIsFocused();
  // const navigation = useNavigation();
  useEffect(() => {
  }, [isFocused])
  const navigation= useNavigation();
  const dummy = ['1', '2'];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f0f0',
      }}>
      <Animatable.View
        animation={'slideInUp'}
        duration={1200}
        style={{
          marginTop: 30,
          paddingLeft: 20,
          backgroundColor: '#f0f0f0',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon name="menu" size={30} color="black" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              marginLeft: 15,
              alignSelf: 'center',
            }}>
            MyFood
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fffafa',
            height: 40,
            width: 40,
            borderRadius: 25,
            justifyContent: 'center',
            marginRight: 10,
            alignItems: 'center',
          }}>
          <Icon name="search" size={25} />
        </View>
      </Animatable.View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Animatable.Text
          style={{
            backgroundColor: 'red',
            padding: 10,
            color: 'white',
            borderRadius: 10,
          }}
          animation="slideInUp"
          duration={1300}>
          All
        </Animatable.Text>
        <Animatable.Text
          style={{
            backgroundColor: 'red',
            padding: 10,
            color: 'white',
            borderRadius: 10,
          }}
          animation="slideInUp"
          duration={1400}>
          Maggie
        </Animatable.Text>
        <Animatable.Text
          style={{
            backgroundColor: 'red',
            padding: 10,
            color: 'white',
            borderRadius: 10,
          }}
          animation="slideInUp"
          duration={1500}>
          Noodels
        </Animatable.Text>
        <Animatable.Text
          style={{
            backgroundColor: 'red',
            padding: 10,
            color: 'white',
            borderRadius: 10,
          }}
          animation="slideInUp"
          duration={1600}>
          Pizza
        </Animatable.Text>
        <Animatable.Text
          style={{
            backgroundColor: 'red',
            padding: 10,
            color: 'white',
            borderRadius: 10,
          }}
          animation="slideInUp"
          duration={1700}>
          Momoos
        </Animatable.Text>
      </View>
      <FlatList
        data={[
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'momos',
            rating: "4.3"
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'paneer',
            rating: "4.1",
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'pizza',
            rating: "3.5"
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
          {
            image: require('../../asstes/images.jpeg'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
          {
            image: require('../../asstes/op.png'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
          {
            image: require('../../asstes/dd.jpeg'),
            price: '$10',
            title: 'palak',
            rating: "3.5"
          },
        ]}
        // horizontal
        numColumns={2}
        // showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
              animation="slideInUp"
              duration={1000 * (index + 0.5)}
              style={{
                width: '50%',
                marginTop: 20,
                height: 200,
                backgroundColor: '#f0f0f0',
                alignItems: 'center',
              }}>
              <AnimatedButton
              onPress={()=> navigation.navigate('Example3',{data : item})}
              animation="zoomInLeft"
              duration={1000*(index+1)}
                style={{
                  width: '80%',
                  height: '70%',
                  position: 'absolute',
                  backgroundColor: '#d7b788',
                  bottom: 0,
                  borderRadius: 15,
                }}
                
                >
                <Text
                  style={{
                    marginTop: 60,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: index % 2 == 0 ? 'blue' : 'red',
                    // width: '90%',
                    padding:5,
                    textAlign: 'center',
                    backgroundColor:'#e8b6f7',
                    borderRadius:10
                  }}>
                  {item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    alignItems: 'center',
                    marginTop:5
                  }}>
                  <Animatable.Text
                    style={{
                      backgroundColor: '#bbef7b',
                      padding: 10,
                      color: '#000000',
                      borderRadius: 10,
                      fontWeight:'500'
                    }}
                    animation="slideInUp"
                    duration={1000 * (index + 1)}>
                    {item.price}
                  </Animatable.Text>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'pink',
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="bag" size={25} color="black" />
                  </View>
                </View>
              </AnimatedButton>
              <Animatable.Image
                animation={'zoomIn'}
                duration={1000 * (index + 1)}
                resizeMode="cover"
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginTop: 10,
                }}
              />
            </Animatable.View>
          );
        }}
      />
    </View>
  );
};

export default Example2;

const styles = StyleSheet.create({});

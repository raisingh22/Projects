import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);

import {useNavigation, useRoute} from '@react-navigation/native';

const Example3 = () => {
    const navigation = useNavigation();
  const routes = useRoute();
  return (
    <View
      style={{
        backgroundColor: '#f7d2c3',
        flex: 1,
      }}>
      <Animatable.View
        animation={'slideInUp'}
        style={{
          marginTop: 40,
          marginLeft: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: '#f0f0f0',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="arrow-back" size={25} color={'black'} />
        </TouchableOpacity>
        <View
          style={{
            //   marginTop: 40,
            marginRight: 20,
            // paddingLeft:30,
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: '#f0f0f0',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Icons name="dots-three-horizontal" size={25} color={'black'} />
        </View>
      </Animatable.View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '90%',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        <Animatable.View
          animation={'slideInUp'}
          style={{
            backgroundColor: '#f0f0f0',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '86%',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <Animatable.Text
          animation={'zoomIn'}
            style={{
              marginTop: 100,
              textAlign: 'center',
              fontSize: 40,
              color: 'black',
              fontWeight: '500',
            }}>
            {routes.params.data.title}
          </Animatable.Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            <Animatable.Text
            animation={'slideInUp'}
              style={{
                marginTop: 20,
                fontSize: 25,
                color: 'black',
                fontWeight: '500',
              }}>
              {routes.params.data.price}
            </Animatable.Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Animatable.Text
              animation={'slideInUp'}
                style={{
                  marginTop: 20,

                  fontSize: 25,
                  color: 'black',
                  fontWeight: '500',
                }}>
                {routes.params.data.rating}
              </Animatable.Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Icon name="star-outline" size={20} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            <Animatable.Text
            animation={'slideInUp'}
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
              }}>
              {'Cold Drink'}
            </Animatable.Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Animatable.Text
              animation={'slideInUp'}
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                {'$3'}
              </Animatable.Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            <Animatable.Text
            animation={'slideInUp'}
              style={{
                marginTop: 20,
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
              }}>
              {'Extra Sauce'}
            </Animatable.Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Animatable.Text
              animation={'slideInUp'}
                style={{
                  marginTop: 20,

                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                {'$2'}
              </Animatable.Text>
            </View>
          </View>
        </Animatable.View>
        <Animatable.Image
          animation={'zoomIn'}
          style={{
            height: 180,
            width: 180,
            borderRadius: 90,
            alignSelf: 'center',
            // marginTop:40
          }}
          source={routes.params.data.image}
        />
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
        >
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: 'white',
          }}>
          Add To Cart
        </Text>
      </AnimatedButton>
      </View>
    </View>
  );
};

export default Example3;

const styles = StyleSheet.create({});

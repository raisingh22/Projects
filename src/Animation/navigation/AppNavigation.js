import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Example from '../screens/Example';
import Example2 from '../screens/Example2';
import Example3 from '../screens/Example3';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const config = {
        animation: 'zoomIn',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
  return (
    <Stack.Navigator 

    screenOptions={{
        gestureEnabled:true,
        headerShown:false,
        gestureDirection:'horizontal'
    }}
    >
      <Stack.Screen name="Example" component={Example} 
      
    />
      <Stack.Screen name="Example2" component={Example2}
        options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
      />
      <Stack.Screen
      name='Example3'
      component={Example3}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

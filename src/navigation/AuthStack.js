import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Avatar from '../components/Avatar';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'NewsShort',
          headerStyle: {
            backgroundColor: '#18191A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerRight: () => <Avatar />,
        }}
      />
    </Stack.Navigator>
  );
}


import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import LoginAnimation from './screens/LoginAnimation';
import CardsAnimation from './screens/CardsAnimation';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="CardsAnimation" component={CardsAnimation}/>
    <Stack.Screen name="LoginAnimation" component={LoginAnimation} options={{headerShown: false}}  />
  </Stack.Navigator>
)

export default MainStack;



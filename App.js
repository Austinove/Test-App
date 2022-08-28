/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ComponentsScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
const style = StyleSheet.create({
  viewLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

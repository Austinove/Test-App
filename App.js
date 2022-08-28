/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentsScreen from './src/components/ComponentsScreen';
import ListScreen from './src/components/ListScreen';
import ImageScreen from './src/components/ImageScreen';
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
        {/* <Stack.Screen name="ListScreen" component={{ ListScreen }} /> */}
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
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

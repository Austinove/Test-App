/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentsScreen from './src/components/ComponentsScreen';
import ListScreen from './src/components/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <View>
        <ComponentsScreen />
        {/* <ListScreen/> */}
      </View>
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

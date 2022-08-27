/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 
const ComponentsScreen = () => {
  const myName = 'Bryan Austin';
  return (
    <View style={style.viewLayout}>
      <Text style={style.textStyle}>Getting Started With React Native</Text>
      <Text style={style.subHeaderStyle}>My Name is {myName}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  },
  viewLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ComponentsScreen;

/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'; 
const ComponentsScreen = (props) => {
  console.log(props)
  const myName = 'Bryan Austin';
  return (
    <View>
      <Text style={style.textStyle}>Getting Started With React Native</Text>
      <Text style={style.subHeaderStyle}>My Name is {myName}</Text>
      <Button
        onPress={() => console.log("Button Pressed")}
        title='Got to Components Demo'
      />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
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

/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'; 
const ComponentsScreen = ({navigation}) => {
  const myName = 'Bryan Austin';
  return (
    <View style={style.viewLayout}>
      <Text style={style.textStyle}>Getting Started With React Native</Text>
      <Text style={style.subHeaderStyle}>My Name is {myName}</Text>
      <Button
        style={style.buttonStyle}
        onPress={() => console.log("Button Pressed")}
        title='Got to Components Demo'
      />
      <Button style={style.buttonStyle} onPress={() => navigation.navigate("ListScreen")} title="Go to List Demo" />
      <Button style={style.buttonStyle} onPress={() => navigation.navigate("ImageScreen")} title="Find Images" />
      <Button onPress={() => navigation.navigate("CounterScreen")} title="Go to Counter Screen" />
      <Button onPress={() => navigation.navigate("ColorScreen")} title="Go to Color Screen" />
      <Button onPress={() => navigation.navigate("SquareScreen")} title="Go to Square Screen"/>
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
  },
  buttonStyle: {
    marginBottom: 4,
    fontSize: 40,
    height: 50,
    width: 60
  }
});

export default ComponentsScreen;

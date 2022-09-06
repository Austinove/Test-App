import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 300,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default BoxScreen;

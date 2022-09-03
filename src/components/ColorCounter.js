import {propTypes} from 'prop-types';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  //   ColorCounter.propTypes = {
  //     color: propTypes.string,
  //     onIncrease: propTypes.func,
  //     onDecrease: propTypes.func,
  //   };
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease  ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;

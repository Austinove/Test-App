import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case 'red':
        console.log(action.colorToChange, ', ', action.amount);
        console.log('//', state);
        return state.red + action.amount < 255 || state.red + action > 0
          ? {...state, red: state.red + action.amount}
          : state;

      case 'green':
        return state.red + action.amount < 255 || state.red + action > 0
          ? {...state, green: state.green + action.amount}
          : state;

      case 'blue':
        return state.red + action.amount < 255 || state.red + action > 0
          ? {...state, blue: state.blue + action.amount}
          : state;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  const COLOR_INCREMENT = 15;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})
        }
        color="blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

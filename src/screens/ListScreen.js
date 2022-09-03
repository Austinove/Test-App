import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Frind 1', age: '10'},
    {name: 'Frind 2', age: '13'},
    {name: 'Frind 3', age: '17'},
    {name: 'Frind 4', age: '18'},
    {name: 'Frind 5', age: '11'},
    {name: 'Frind 6', age: '16'},
    {name: 'Frind 7', age: '14'},
    {name: 'Frind 8', age: '13'},
    {name: 'Frind 9', age: '15'},
    {name: 'Frind 10', age: '18'},
    {name: 'Frind 11', age: '12'},
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={friends => friends.name}
      renderItem={({item}) => {
        //element === { item: {name: 'frient 1'}, index: 0 }
        //item === {name: 'friend'}
        return (
          <Text style={style.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
});

export default ListScreen;

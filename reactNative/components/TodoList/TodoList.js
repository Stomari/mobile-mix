import React, { useState } from 'react';
import { View } from 'react-native'

// components
import Title from './Title/Title';
import Input from './Input/Input';

// styles
import TodoListStyles from './TodoListStyles';
import List from './List/List';

const ListComponents = () => {
  const [list, setList] = useState([]);

  const addToList = (task) => {
    setList([...list, task]);
  };

  const removeFromList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View style={TodoListStyles.container}>
      <Title/>
      <Input addToList={addToList} />
      <List list={list} removeFromList={removeFromList} />
    </View>
  );
};

export default ListComponents;

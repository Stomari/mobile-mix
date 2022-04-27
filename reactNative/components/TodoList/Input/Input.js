import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

// styles
import InputStyles from './InputStyles.js';

const Input = ({ addToList }) => {
  const [value, setValue] = useState('');

  const onPressHandler = () => {
    if (!value) {
      return;
    }
    addToList(value);
    setValue('');
  };

  return (
    <View style={InputStyles.container}>
      <TextInput
        style={InputStyles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Type your tasks here!"
      />
      <View style={InputStyles.buttonContainer}>
        <TouchableOpacity style={InputStyles.button} onPress={(event) => onPressHandler(event)}>
          <Text style={InputStyles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

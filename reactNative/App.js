/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

// components
import ListComponents from './components/TodoList/TodoList';

const App = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ListComponents />
    </SafeAreaView>
  );
};

export default App;

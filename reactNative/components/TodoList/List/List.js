import React from 'react';
import { FlatList, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

// styles
import ListStyles from './ListStyles';

const List = ({ list, removeFromList }) => {
  const renderItem = ({ item, index }) => (
    <View style={ListStyles.item}>
      <Text style={ListStyles.text}>{`\u2022 ${item}`}</Text>
      <TouchableOpacity style={ListStyles.button} onPress={() => removeFromList(index)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const ItemSeparatorComponent = () => (
    <View style={ListStyles.separator} />
  )

  return (
    <View style={ListStyles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  )
};

export default List;
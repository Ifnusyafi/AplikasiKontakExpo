// components/Home.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Home({ navigation, contacts }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('KontakDetail', { contact: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
});

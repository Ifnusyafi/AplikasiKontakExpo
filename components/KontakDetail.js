// components/KontakDetail.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function KontakDetail({ route, navigation }) {
  const { contact } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: contact.name });
  }, [contact.name, navigation]);

  return (
    <View style={styles.container}>
      <Image source={contact.photo} style={styles.image} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <Text style={styles.description}>{contact.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100, // Optional: if you want rounded images
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

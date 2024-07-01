// components/About.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Image source={require('../assets/default.jpeg')} style={styles.image} />
      <Text style={styles.description}>
        This is a description of the app with a picture of Jihyo.
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

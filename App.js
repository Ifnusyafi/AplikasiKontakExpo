import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import KontakDetail from './components/KontakDetail';
import About from './components/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Home {...props} contacts={contacts} />}
        </Stack.Screen>
        <Stack.Screen name="KontakDetail" component={KontakDetail} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const contacts = [
  { id: '1', name: 'Alriza', phone: '0612-3456-7890', description: 'Teman Sekolah', photo: require('./assets/jihyo.jpeg') },
  { id: '2', name: 'Naufal', phone: '0612-3456-7890', description: 'Babu', photo: require('./assets/GojoWakana.jpeg') },
  { id: '3', name: 'Ifnu', phone: '0612-3456-7890', description: 'Manusia Ganteng Sejagat', photo: require('./assets/Mama.jpg') },
  { id: '4', name: 'Damian', phone: '0612-3456-7890', description: 'Manusia Ganteng Sejagat', photo: require('./assets/Damian.jpg') },
];

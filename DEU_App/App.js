import React from 'react';
//import "react-native-gesture-handler"
import { NavigationContainer }  from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {StyleSheet, Text} from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigation/>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  text:{
    fontSize:10,
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  
})


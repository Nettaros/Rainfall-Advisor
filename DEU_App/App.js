import { LinearGradient } from 'expo-linear-gradient'
import React from 'react';
//import "react-native-gesture-handler"
import { NavigationContainer }  from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {StyleSheet, Text} from 'react-native'



export default function App() {
  return (
    <LinearGradient colors={['rgba(0, 91, 234,0.9)','rgba(0, 198, 251,0.9)','rgba(0, 91, 234,0.9)']} style={style.background}>
      <NavigationContainer>
          <DrawerNavigation/>
      </NavigationContainer>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  background: {
    flex:1
  },
  text:{
    fontSize:10,
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },

  
})


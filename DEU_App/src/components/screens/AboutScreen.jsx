import React from 'react'
import {View, Text} from 'react-native'
import {useTheme} from '@react-navigation/native';
import HowOperatesScreen from './HowOperatesScreen.jsx'
import InfoScreen from './InfoScreen.jsx'
import themeChanger from '../settings/themeChanger';
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, DarkTheme }  from '@react-navigation/native';

const About = () => {
    const theme = themeChanger();
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true} theme={theme}>
                <Tab.Navigator theme={theme}>
                    <Tab.Screen name="¿Como funciona?" component={HowOperatesScreen}/>
                    <Tab.Screen name="Información" component={InfoScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default About
import React from 'react'
import {View, Text} from 'react-native'
import {useTheme} from '@react-navigation/native';
import HowOperatesScreen from './HowOperatesScreen.jsx'
import InfoScreen from './InfoScreen.jsx'
import themeChanger from '../settings/themeChanger';
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, DarkTheme }  from '@react-navigation/native';
import Theme from '../settings/theme.jsx';

const About = () => {
    const themeNavigator = themeChanger();
    const theme= Theme()
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true} theme={themeNavigator}>
                <Tab.Navigator screenOptions={{
                    tabBarLabelStyle:{ fontSize: theme.fontSizes.body}
                }}>
                    <Tab.Screen name="¿Como funciona?" component={HowOperatesScreen}/>
                    <Tab.Screen name="Información" component={InfoScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default About
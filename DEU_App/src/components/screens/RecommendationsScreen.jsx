import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, DarkTheme }  from '@react-navigation/native';
import RecoBeforeScreen from './RecommendationsScreenBefore.jsx'
import RecoDuringScreen from './RecommendationsScreenDuring.jsx'
import RecoAfterScreen from './RecommendationsScreenAfter.jsx'
import themeChanger from '../settings/themeChanger';

const RecommendationsScreen = () => {
    const theme = themeChanger();
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true} theme={theme}>
                <Tab.Navigator theme={theme}>
                    <Tab.Screen name="Antes" component={RecoBeforeScreen}/>
                    <Tab.Screen name="Durante" component={RecoDuringScreen}/>
                    <Tab.Screen name="Después" component={RecoAfterScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RecommendationsScreen

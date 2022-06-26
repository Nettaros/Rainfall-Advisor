import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, DarkTheme }  from '@react-navigation/native';
import RecoBeforeScreen from './RecommendationsScreenBefore.jsx'
import RecoDuringScreen from './RecommendationsScreenDuring.jsx'
import RecoAfterScreen from './RecommendationsScreenAfter.jsx'
import themeChanger from '../settings/themeChanger';
import Theme from '../settings/theme.jsx';

const RecommendationsScreen = () => {
    const themeNavigator = themeChanger();
    const theme = Theme()
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true} theme={themeNavigator}>
                <Tab.Navigator screenOptions={{
                    tabBarLabelStyle:{ fontSize: theme.fontSizes.body}
                }}>
                    <Tab.Screen name="Antes" component={RecoBeforeScreen}/>
                    <Tab.Screen name="Durante" component={RecoDuringScreen}/>
                    <Tab.Screen name="Después" component={RecoAfterScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RecommendationsScreen

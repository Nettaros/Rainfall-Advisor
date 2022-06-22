import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer }  from '@react-navigation/native';
import RecoBeforeScreen from './RecommendationsScreenBefore.jsx'
import RecoDuringScreen from './RecommendationsScreenDuring.jsx'
import RecoAfterScreen from './RecommendationsScreenAfter.jsx'

const RecommendationsScreen = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name="Antes" component={RecoBeforeScreen}/>
                    <Tab.Screen name="Durante" component={RecoDuringScreen}/>
                    <Tab.Screen name="Después" component={RecoAfterScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RecommendationsScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fafaf"
    },
    title: {
        fontSize: 32,
        fontStyle: "bold",
        alignSelf:"center"
    },
    bar: {
        fontSize: 20
    }
})
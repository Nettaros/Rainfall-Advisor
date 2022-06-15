import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer }  from '@react-navigation/native';
import Appbar from '../AppBar.jsx'
import RecoBeforeScreen from './RecoBefore.jsx'
import RecoDuringScreen from './RecoDuringScreen.jsx'
import RecoAfterScreen from './RecoAfterScreen.jsx'

const RecommendationsScreen = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <NavigationContainer independent={true}>
            <View>
                <Tab.Navigator>
                    <Tab.Screen name="Antes" component={RecoBeforeScreen}/>
                    <Tab.Screen name="Durante" component={RecoDuringScreen}/>
                    <Tab.Screen name="Después" component={RecoAfterScreen}/>
                </Tab.Navigator>
            </View>
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
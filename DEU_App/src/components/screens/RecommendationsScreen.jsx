import React,{useEffect} from 'react'
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer }  from '@react-navigation/native';
import RecoBeforeScreen from './RecommendationsScreenBefore.jsx'
import RecoDuringScreen from './RecommendationsScreenDuring.jsx'
import RecoAfterScreen from './RecommendationsScreenAfter.jsx'
import Settings from '../settings/Settings.jsx';
import { navigationRef } from '../../navigation/RootNavReco.js';
import * as RootNavigation from '../../navigation/RootNavReco.js'


const RecommendationsScreen = (value) => {
    const theme = Settings()
    const themeNavigator = theme.theme
    const Tab = createMaterialTopTabNavigator()

    useEffect(() => {
        if(value != null && value.route.params != null){
            RootNavigation.navigate(value.route.params)
        }
    })

    return (
        <NavigationContainer independent={true} theme={themeNavigator} ref={navigationRef} >
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle:{ fontSize: theme.fontSizes.body}}}>
                <Tab.Screen name="Antes" component={RecoBeforeScreen}/>
                <Tab.Screen name="Durante" component={RecoDuringScreen}/>
                <Tab.Screen name="Después" component={RecoAfterScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RecommendationsScreen

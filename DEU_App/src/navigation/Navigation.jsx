import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

//Screens
import SettingScreen from "../components/screens/SettingScreen";
import RecommendationsScreen from "../components/screens/RecommendationsScreen"
import WhoWeAreScreen from "../components/screens/WhoWeAreScreen"
import HelpScreen from "../components/screens/HelpScreen"
import MainScreen from "../components/screens/MainScreen"



const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingScreen}/>
            <Drawer.Screen name="Recomendacion" component={RecommendationsScreen}/>
            <Drawer.Screen name="Quienes somos" component={WhoWeAreScreen}/>
            <Drawer.Screen name="Ayuda" component={HelpScreen}/>
        </Drawer.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    );
}
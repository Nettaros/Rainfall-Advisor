import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {useTheme} from '@react-navigation/native';

//Screens
import SettingScreen from "../components/screens/SettingScreen";
import RecommendationsScreen from "../components/screens/RecommendationsScreen";
import InfoScreen from "../components/screens/InfoScreen";
import MainScreen from "../components/screens/MainScreen";
import OnBoardingScreen from "../components/screens/OnBoardingScreen";

//Boton generico
import MenuButtonItem from "../components/MenuButtonItem";

//Importamos tema
import Settings from "../components/settings/Settings";

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
    
    const {colors} = useTheme();
    
    return (
        <Drawer.Navigator accessible={true} accessibilityRole="menu" screenOptions={{headerTintColor: colors.text}} drawerContent={(props) => <MenuItem {...props} />}>
            <Drawer.Screen name="Precipitación" component={MainScreen}/>
            <Drawer.Screen name="Configuración" component={SettingScreen}/>
            <Drawer.Screen name="Recomendaciones" component={RecommendationsScreen}/>
            <Drawer.Screen name="Sobre la Aplicación" component={InfoScreen}/>
            <Drawer.Screen name="Guia de inicio" component={OnBoardingScreen}/>
        </Drawer.Navigator>
        
    );
}

const MenuItem = ({navigation}) =>{
    const {colors} = useTheme();
    const theme = Settings();
    return (
        <DrawerContentScrollView 
            style = {[style.container, {backgroundColor: colors.primary}]}> 
            <TouchableOpacity accessibilityRole="button" accessibilityHint="Cerrar menú" onPress={()=>navigation.toggleDrawer()}>
                <Text style={[style.text, {color: colors.text, fontSize: theme.fontSizes.subheading}]}>X</Text>
            </TouchableOpacity>
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Precipitación"
                onPress={()=> navigation.navigate('Precipitación')}
                hint="Nivel de precipitación en La Plata"  
            />
        
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Recomendaciones"
                onPress={()=> navigation.navigate('Recomendaciones')} 
                hint="Recomendaciones sobre que hacer antes, durante y después de una inundación"   
            />
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Sobre la Aplicación"
                onPress={()=> navigation.navigate('Sobre la Aplicación')}            
                hint="Información sobre la aplicación"  
            />
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Configuración"
                onPress={()=> navigation.navigate('Configuración')}  
                hint="Configuración de la aplicación"  
            />

            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Guía de inicio"
                onPress={()=> navigation.navigate('Guia de inicio')}  
                hint="Guía de inicio sobre la aplicación"  
            />

            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <Text accessibilityRole="text" style={[style.footerText, {color: colors.text, fontSize: theme.fontSizes.small}]}>2020 - Diseño de Experiencia de Usuario</Text>  
        </DrawerContentScrollView>
        
        
    );
}


const style = StyleSheet.create({
    container: {
        padding: 15, 
    },
    separator:{
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        marginEnd:15,
        padding:15,
        fontWeight: 'bold',
    },
    footerText:{
        padding:15,
    },
})
import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {useTheme} from '@react-navigation/native';
//Screens
import SettingScreen from "../components/screens/SettingScreen";
import RecommendationsScreen from "../components/screens/RecommendationsScreen";
import WhoWeAreScreen from "../components/screens/WhoWeAreScreen";
import HelpScreen from "../components/screens/HelpScreen";
import MainScreen from "../components/screens/MainScreen";
//Boton generico
import MenuButtonItem from "../components/MenuButtonItem";





const Drawer = createDrawerNavigator()

const Separator = (color) =>{
    return(
        <View style={[style.separator, {borderBottomColor:color}]} />
    );
}

const Footer = (color) => {
    return (
        <Text style={[style.footerText, {color: color}]}>2020 - Diseño de Experiencia de Usuario</Text>  
    );
  }
  

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={(props) => <MenuItem {...props} />}>
            <Drawer.Screen name="Precipitacion" component={MainScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingScreen}/>
            <Drawer.Screen name="Recomendaciones" component={RecommendationsScreen}/>
            <Drawer.Screen name="¿Como funciona?" component={WhoWeAreScreen}/>
            <Drawer.Screen name="Ayuda" component={HelpScreen}/>
        </Drawer.Navigator>
    );
}

const MenuItem = ({navigation}) =>{
    const {colors} = useTheme();
    return (

        <DrawerContentScrollView 
            style = {[style.container, {backgroundColor: colors.background}]}> 
            
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                <Text style={[style.text, {color: colors.text}]}>X</Text>
            </TouchableOpacity>
            
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Precipitación"
                onPress={()=> navigation.navigate('Precipitacion')}
                
            />

            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Configuración"
                onPress={()=> navigation.navigate('Configuracion')}
                
            />

            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Recomendaciones"
                onPress={()=> navigation.navigate('Recomendaciones')}
                
            />

            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="¿Como funciona?"
                onPress={()=> navigation.navigate('¿Como funciona?')}
                
            />

            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Ayuda"
                onPress={()=> navigation.navigate('Ayuda')}
                
            />

            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />
            
            <Text style={[style.footerText, {color: colors.text}]}>2020 - Diseño de Experiencia de Usuario</Text>  
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
        fontSize: 25,
        marginEnd:15,
        padding:15,
        fontWeight: 'bold',
    },
    footerText:{
        fontSize: 10,
        padding:15,
    
    },

})
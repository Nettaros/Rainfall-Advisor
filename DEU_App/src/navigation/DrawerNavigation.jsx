import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {useTheme} from '@react-navigation/native';
//Screens
import SettingScreen from "../components/screens/SettingScreen";
import RecommendationsScreen from "../components/screens/RecommendationsScreen";
import AboutScreen from "../components/screens/AboutScreen";
import MainScreen from "../components/screens/MainScreen";
//Boton generico
import MenuButtonItem from "../components/MenuButtonItem";
//Importamos tema
import Theme from "../components/settings/theme";
const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
    const {colors} = useTheme();
    
    return (
        <Drawer.Navigator accesibilyRole="menu" screenOptions={{headerTintColor: colors.text}} drawerContent={(props) => <MenuItem {...props} />}>
            <Drawer.Screen name="Precipitacion" component={MainScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingScreen}/>
            <Drawer.Screen name="Recomendaciones" component={RecommendationsScreen}/>
            <Drawer.Screen name="Sobre la App" component={AboutScreen}/>
        </Drawer.Navigator>
    );
}

const MenuItem = ({navigation}) =>{
    const {colors} = useTheme();
    const theme = Theme();
    return (

        <DrawerContentScrollView 
            style = {[style.container, {backgroundColor: colors.primary}]}> 
            
            <TouchableOpacity accessibilityRole="button" accessibilityHint="Cerrar menú" onPress={()=>navigation.toggleDrawer()}>
                <Text style={[style.text, {color: colors.text, fontSize: theme.fontSizes.subheading}]}>X</Text>
            </TouchableOpacity>
            
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Precipitación"
                onPress={()=> navigation.navigate('Precipitacion')}
                hint="Nivel de precipitación en La Plata"  
            />
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Configuración"
                onPress={()=> navigation.navigate('Configuracion')}  
                hint="Configuración de la aplicación"  
            />
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Recomendaciones"
                onPress={()=> navigation.navigate('Recomendaciones')} 
                hint="Recomendaciones sobre que hacer antes, durante y después de una inundación"   
            />
            
            <View style={[style.separator, {borderBottomColor:colors.text}]} />

            <MenuButtonItem
                text="Sobre la App"
                onPress={()=> navigation.navigate('Sobre la App')}            
                hint="Información sobre la aplicación"  
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
        marginEnd:15,
        padding:15,
        fontWeight: 'bold',
    },
    footerText:{
        fontSize: 10,
        padding:15,
    },
})
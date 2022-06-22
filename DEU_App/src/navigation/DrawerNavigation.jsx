import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native'
//Screens
import SettingScreen from "../components/screens/SettingScreen";
import RecommendationsScreen from "../components/screens/RecommendationsScreen";
import WhoWeAreScreen from "../components/screens/WhoWeAreScreen";
import HelpScreen from "../components/screens/HelpScreen";
import MainScreen from "../components/screens/MainScreen";
//Boton generico
import MenuButtonItem from "../components/MenuButtonItem";


const Drawer = createDrawerNavigator()

const Separator = () =>{
    return(
        <View style={style.separator} />
    );
}

const Footer = () => {
    return (
        <Text style={style.footerText}>2020 - Diseño de Experiencia de Usuario</Text>  
    );
  }
  

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={(props) => <MenuItem {...props} /> }>
            <Drawer.Screen name="Menu" component={MainScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingScreen}/>
            <Drawer.Screen name="Recomendaciones" component={RecommendationsScreen}/>
            <Drawer.Screen name="Quienes somos" component={WhoWeAreScreen}/>
            <Drawer.Screen name="Ayuda" component={HelpScreen}/>
        </Drawer.Navigator>
    );
}

const MenuItem = ({navigation}) =>{
    return (

        <DrawerContentScrollView
            style = {style.container}> 
            
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                <Text style={style.text}>X</Text>
            </TouchableOpacity>
            
            
            <Separator/>
            <MenuButtonItem
                text="Menu"
                onPress={()=> navigation.navigate('Menu')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Configuracion"
                onPress={()=> navigation.navigate('Configuracion')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Recomendaciones"
                onPress={()=> navigation.navigate('Recomendaciones')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Quienes somos"
                onPress={()=> navigation.navigate('Quienes somos')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Ayuda"
                onPress={()=> navigation.navigate('Ayuda')}
                
            />
            <Separator/>
            <Footer/>
        </DrawerContentScrollView>
        
        
    );
}


const style = StyleSheet.create({
    
    container: {
        padding: 15,
        backgroundColor: '#000000',
       
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    separator:{
        borderBottomColor: '#ffffff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        color:'#ffffff',
        fontSize: 25,
        marginEnd:15,
        padding:15,
        fontWeight: 'bold',
    },
    footerText:{
        fontSize: 10,
        color:'#ffffff',
        padding:15,
        

    },

})
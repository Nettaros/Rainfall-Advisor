import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {StyleSheet, View} from 'react-native'
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

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={(props) => <MenuItem {...props} /> }>
            <Drawer.Screen name="Home" component={MainScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingScreen}/>
            <Drawer.Screen name="Recomendacion" component={RecommendationsScreen}/>
            <Drawer.Screen name="Quienes somos" component={WhoWeAreScreen}/>
            <Drawer.Screen name="Ayuda" component={HelpScreen}/>
        </Drawer.Navigator>
    );
}

const MenuItem = ({navigation}) =>{
    return (
        <DrawerContentScrollView
            style = {style.container}> 
            <MenuButtonItem
                text="Menu"
                onPress={()=> navigation.navigate('Home')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Configuracion"
                onPress={()=> navigation.navigate('Configuracion')}
                
            />
            <Separator/>
            <MenuButtonItem
                text="Recomendacion"
                onPress={()=> navigation.navigate('Recomendacion')}
                
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
        </DrawerContentScrollView>
        
    );
}


const style = StyleSheet.create({
    
    container: {
        padding: 15,
        backgroundColor: '#000000'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    separator:{
        marginVertical: 8,
        borderBottomColor: '#ffffff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    

})
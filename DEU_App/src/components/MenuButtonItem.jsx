import React from 'react'
import {Text, TouchableOpacity,StyleSheet, View} from 'react-native'


const MenuButtonItem = ({text,onPress}) =>{
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={style.buttonContainer}
        >
            
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
        
    );
}
const style = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        padding:10,
        flexDirection:'row',

    },
    text: {
        color:'#ffffff',
        fontSize: 20,
        marginEnd:15,
    },
   
    
})

export default MenuButtonItem
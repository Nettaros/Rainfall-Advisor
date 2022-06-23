import React from 'react'
import {Text, TouchableOpacity,StyleSheet, View} from 'react-native'
import {useTheme} from '@react-navigation/native';

const MenuButtonItem = ({text,onPress}) =>{
    const {colors} = useTheme();
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={style.buttonContainer}
        >
            
            <Text style={[style.text, {color: colors.text}]}>{text}</Text>
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
        fontSize: 20,
        marginEnd:15,
    },
   
    
})

export default MenuButtonItem
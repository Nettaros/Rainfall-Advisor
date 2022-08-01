import React from 'react'
import {Text, TouchableOpacity,StyleSheet} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Settings from "./settings/Settings"

const MenuButtonItem = ({text,onPress,hint}) =>{
    const {colors} = useTheme();
    const theme = Settings()
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={style.buttonContainer}
            accessibilityRole="button"
            accessibilityHint={hint}
        >
            <Text style={[style.text, {color: colors.text, margin:10,fontSize: theme.fontSizes.subheading}]}>{text}</Text>
        </TouchableOpacity>
        
    );
}
const style = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        padding:1,
        flexDirection:'row',
    },
})

export default MenuButtonItem
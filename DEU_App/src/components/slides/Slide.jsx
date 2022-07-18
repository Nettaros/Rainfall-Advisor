import React from 'react'
import {useTheme} from '@react-navigation/native';
import Theme from '../../components/settings/theme';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'

const Slide = ({item}) =>{
    const theme = Theme();
    const {colors} = useTheme();
    const {width} = useWindowDimensions();
    return( 
        <View style={{alignItems: 'center', width}}>
            <Text style={[styles.title,{color: colors.text, fontSize: theme.fontSizes.title}]}>{item.title}</Text>
            <Text style={[styles.subtitle,{color: colors.text, fontSize: theme.fontSizes.subheading}]}>{item.subtitle}</Text>
        </View>
)};

export default Slide;
const styles= StyleSheet.create({
    title:{
        fontWeight: 'bold',
        marginTop: 20,
        margin:5,
        textAlign: 'center',

        
    },
    subtitle:{
        marginTop: 10,
        textAlign: 'center',
    }
});
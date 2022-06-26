import { useTheme } from '@react-navigation/native'
import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Theme from '../settings/theme';

const TabListElement = ({text}) => {
    const {colors} = useTheme();
    const theme = Theme()
    return (
        <Text style={[
            styles.item , {
            backgroundColor: colors.primary, 
            color: colors.text,
            borderColor: colors.border, 
            fontSize: theme.fontSizes.body}]}>
            {text}
        </Text>
    )
}

export default TabListElement

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10
    }
})


import React from "react";
import {View, Text, ScrollView, StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';

const RecoDuringScreen = () => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <View accesible={true}>
            <ScrollView>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendación 23</Text>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendacion 2</Text>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendacion 3</Text>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendacion 4</Text>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendacion 221</Text>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>Recomendacion 2</Text>
            </ScrollView>
        </View>
    )
}

export default RecoDuringScreen

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10
    }
})
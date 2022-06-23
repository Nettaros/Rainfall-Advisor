import React from "react";
import {View, Text, ScrollView, StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native';

const RecoDuringScreen = () => {
    const {colors} = useTheme();
    return (
        <View>
            <ScrollView>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendación 23</Text>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendacion 2</Text>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendacion 3</Text>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendacion 4</Text>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendacion 221</Text>
                <Text style={[styles.item , {color: colors.text}, {borderColor: colors.border}]}>Recomendacion 2</Text>
            </ScrollView>
        </View>
    )
}

export default RecoDuringScreen

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10
    }
})
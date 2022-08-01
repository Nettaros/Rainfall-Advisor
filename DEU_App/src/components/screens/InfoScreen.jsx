import React from "react";
import {View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity} from 'react-native'
import {Link, useTheme} from '@react-navigation/native';
import Settings from '../settings/Settings';
import TabListElement from "../style/tabListElement";

const InfoScreen = () => {
    const {colors} = useTheme();
    const theme = Settings();
    return (
        <View accessible={true}>
            <ScrollView>
                <TabListElement text="
                    La información proporcionada por la aplicación para hacer las recomendaciones 
                    utiles antes, durante y despues de una inundación proviene del 
                    Plan de Reducción del Riesgo por Inundaciones para la Región La Plata."/>
                <View>
                    <TouchableOpacity accessibilityRole="button" >
                        <Text style={[styles.text, {fontSize: theme.fontSizes.body, color: colors.text, backgroundColor: colors.primary}]} 
                                onPress={() => Linking.openURL("http://sedici.unlp.edu.ar/handle/10915/112896")}>
                            ENLACE AL MANUAL
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10,
    },
    text: {
        borderRadius:20,
        flex: 1,
        padding: 20,
        margin: 10,
        alignSelf: "center"
    }
})
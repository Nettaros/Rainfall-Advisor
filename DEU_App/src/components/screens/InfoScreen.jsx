import React from "react";
import {View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity} from 'react-native'
import {Link, useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';

const InfoScreen = () => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <View accessible={true}>
            <ScrollView>
                <Text style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>
                    La información proporcionada por la aplicación para hacer las recomendaciones utiles antes, durante y despues
                     de una inundación proviene del Plan de Reducción del Riesgo por Inundaciones para la Región La Plata.
                </Text>
                <View>
                    <TouchableOpacity accessibilityRole="link" >
                        <Text style={[styles.text, {fontSize: theme.fontSizes.body,color: colors.text, backgroundColor: "#0098ff"}]} 
                                onPress={() => Linking.openURL("http://sedici.unlp.edu.ar/handle/10915/112896")}>
                            LINK AL MANUAL
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
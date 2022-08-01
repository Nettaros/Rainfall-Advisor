import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Settings from '../settings/Settings';
import TabListElement from "../style/tabListElement";


const HowOperatesScreen = () => {
    const {colors} = useTheme();
    const theme = Settings();
    return (
        <View accessible={true}>
            <ScrollView accessibilityRole="adjustable">
                <TabListElement text="
                    La aplicación informa sobre 
                    el nivel de precipitación en La Plata."/>
                <TabListElement text="
                    El nivel de precipitación varía entre 0mm y 100mm 
                    y en el caso de que el mismo pase los 50mm aparecerá
                    una notificación para informarte que la lluvia está en niveles altos"/>
                <TabListElement text="
                    El objetivo es mantenerte informado sobre el nivel de 
                    precipitación para que sepas si estás en riesgo o no"/>
                <View style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body, backgroundColor: colors.primary}]}>
                        <Text style={[styles.text , {color: colors.text,fontSize: theme.fontSizes.body}]}>
                            Hay 4 niveles de lluvia:
                        </Text>
                        <Text style={[styles.text , {color: colors.text,fontSize: theme.fontSizes.body}]}>
                            -Sin riesgo (entre 0mm y 25mm) - No hay lluvia o es una lluvia leve
                        </Text>
                        <Text style={[styles.text , {color: colors.text,fontSize: theme.fontSizes.body}]}>
                            -Riesgo Bajo (entre 25mm y 50mm) - Esta lloviendo pero no es muy fuerte
                        </Text>
                        <Text style={[styles.text, {color: colors.text,fontSize: theme.fontSizes.body}]}>
                            -Riesgo Intermedio (entre 50mm y 75mm) - Esta muy lluvioso pero dentro de lo normal
                        </Text>
                        <Text style={[styles.text , {color: colors.text,fontSize: theme.fontSizes.body}]}>
                            -Riesgo Alto (mas de 75mm) - La lluvia esta en niveles peligrosos
                        </Text>
                </View>  
            </ScrollView>
        </View>
    )
}

export default HowOperatesScreen

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10,
    },
    text:{
        flex: 1,
        paddingTop: 10
    }
})
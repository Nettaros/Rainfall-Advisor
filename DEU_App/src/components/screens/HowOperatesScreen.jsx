import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';

const HowOperatesScreen = () => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <View accessible={true}>
            <ScrollView>
                <Text style={[styles.item , {color: colors.text ,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>
                    La aplicación informa sobre el nivel de precipitación en La Plata. 
                </Text>
                <Text style={[styles.item , {color: colors.text ,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>
                    El nivel de precipitación varía entre 0mm y 100mm y en el caso de que el mismo pase los 50mm aparecera
                     una notificación para informarte que la lluvia esta en niveles altos
                </Text>
                <Text style={[styles.item , {color: colors.text, borderColor: colors.border, fontSize: theme.fontSizes.body}]}>
                    El objetivo es mantenerte informado sobre el nivel de precipitación para que sepas si estas en riesgo o no
                </Text> 
                    <View style={[styles.item , {color: colors.text,borderColor: colors.border, fontSize: theme.fontSizes.body}]}>
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
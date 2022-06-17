import React from 'react'
import {View, Text} from 'react-native'
import HelpComponent from '../HelpComponent'

const HelpScreen = () => {
    return (
        <View>
            <HelpComponent title="¿Que niveles de riesgo hay?" info="Muchos"></HelpComponent>
            <HelpComponent title="Esta es otra pregunta" info="Respuesta"></HelpComponent>
        </View>
    )
}

export default HelpScreen
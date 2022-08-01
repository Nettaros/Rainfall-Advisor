import React from "react";
import {View, ScrollView, Text} from 'react-native'
import TabListElement from "../style/tabListElement";

const RecoAfterScreen = () => {
    return (
        <View accessible={true}>
            <ScrollView>
                <TabListElement text="Verificá si la casa está en condiciones de ser habitada nuevamente"/>
                <TabListElement text="Para prevenir accidentes eléctricos, intentá volver al hogar a la luz del día"/>
                <TabListElement text="Secá y ventilá bien las habitaciones"/>
                <TabListElement text="Rociá los muebles tapizados con algún desinfectante y dejalos secar al sol"/>
                <TabListElement text="No consumas el agua de red hasta que se informe que es potable"/>
                <TabListElement text="Revisá todo alimento que haya quedado en tu hogar y eliminá aquellos que hayan sido afectados por las aguas o cuyos envases estén muy deteriorados"/>
                <TabListElement text="Desechá los alimentos que hayan perdido la cadena de frío (si estuvieron 2 horas fuera de la heladera o 4 horas dentro de la misma apagada)."/>
            </ScrollView>
        </View>
    )
}

export default RecoAfterScreen

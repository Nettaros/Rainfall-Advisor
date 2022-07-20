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
            </ScrollView>
        </View>
    )
}

export default RecoAfterScreen

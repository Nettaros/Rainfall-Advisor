import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';
import TabListElement from "../style/tabListElement";

const RecoAfterScreen = () => {
    const {colors} = useTheme();
    const theme = Theme();

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

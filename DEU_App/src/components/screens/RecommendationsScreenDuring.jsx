import React from "react";
import {View, Text, ScrollView, StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';
import TabListElement from "../style/tabListElement";

const RecoDuringScreen = () => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <View accessible={true}>
            <ScrollView>
                <TabListElement text="Si estas caminando mantenete alejado de tendidos eléctricos, postes caídos o cables, ya que podrías electrocutarte"/>
                <TabListElement text="Si estas en un lugar cerrado cortá la electricidad y el gas."/>
                <TabListElement text="Ubicate en zonas altas, la planta superior del lugar o el techo."/>
                <TabListElement text="Si tenés una casa de dos plantas, una terraza o acceso al techo y ves que hay personas corriendo peligro en la calle, ofreceles resguardo."/>
            </ScrollView>
        </View>
    )
}

export default RecoDuringScreen


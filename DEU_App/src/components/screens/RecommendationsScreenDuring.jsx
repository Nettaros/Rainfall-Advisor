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
                <TabListElement text="Recom 1"/>
                <TabListElement text="Recom 2"/>
                <TabListElement text="Recom 3"/>
                <TabListElement text="Recom 4"/>
            </ScrollView>
        </View>
    )
}

export default RecoDuringScreen


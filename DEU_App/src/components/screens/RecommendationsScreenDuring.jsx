import React from "react";
import {View, Text, ScrollView, StyleSheet } from 'react-native'

const RecoDuringScreen = () => {
    return (
        <View>
            <ScrollView>
                <Text style={styles.item}>Recomendación 23</Text>
                <Text style={styles.item}>Recomendacion 2</Text>
                <Text style={styles.item}>Recomendacion 3</Text>
                <Text style={styles.item}>Recomendacion 4</Text>
                <Text style={styles.item}>Recomendacion 221</Text>
                <Text style={styles.item}>Recomendacion 2</Text>
            </ScrollView>
        </View>
    )
}

export default RecoDuringScreen

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10
    }
})
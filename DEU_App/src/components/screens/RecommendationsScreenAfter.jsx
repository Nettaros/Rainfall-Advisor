import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native'

const RecoAfterScreen = () => {
    return (
        <View>
            <ScrollView>
                <Text style={styles.item}>Recom 1</Text>
                <Text style={styles.item}>Recomendacion 2</Text>
                <Text style={styles.item}>Recomendacion 3</Text>
                <Text style={styles.item}>Recomendacion 4</Text>
            </ScrollView>
        </View>
    )
}

export default RecoAfterScreen

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        backgroundColor: "#444",
        alignSelf: "flex-center",
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 10
    }
})
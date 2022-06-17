import React, { useState } from 'react'
import {Text, View , StyleSheet, TouchableHighlight} from 'react-native'

const HelpComponent = ({title, info}) => {
    const [show, setShow] = useState(true)

    const text = (show ? <Text></Text> : <Text style={styles.answer}>{info}</Text>)

    return (
        <View>
            <TouchableHighlight>
                <Text style={styles.question} onPress={() => {
                    setShow(!show)
                }}>{title}</Text>
            </TouchableHighlight>
            {text}
        </View>
    )
}

export default HelpComponent

const styles = StyleSheet.create({
    question: {
        backgroundColor: "#005aff",
        textAlign: "center",
        fontSize: 22,
        padding: 5,
        borderRadius: 5,
        borderColor: "#7f7fff",
        borderWidth: 4
    },
    answer: {
        backgroundColor: "#5e868d",
        fontSize: 16,
        textAlign: "center",
        flex: 1,
        borderRadius: 1,
        borderColor: "#7f7fff",
        borderWidth: 1
    }
})
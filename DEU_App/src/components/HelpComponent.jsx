import React, { useState } from 'react'
import {Text, View , StyleSheet, TouchableHighlight} from 'react-native'
import {useTheme}from '@react-navigation/native';


const HelpComponent = ({title, info}) => {
    const {colors} = useTheme();
    const [show, setShow] = useState(true)
    const text = (show ? <Text></Text> : <Text style={[styles.answer, {color: colors.text}, {borderColor: colors.border}]}>{info}</Text>)

    return (
        <View>
            <TouchableHighlight>
                <Text style={[styles.question, {color: colors.text}, {borderColor: colors.border}]} onPress={() => {
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
        textAlign: "center",
        fontSize: 22,
        padding: 5,
        borderRadius: 5,
        borderWidth: 3,
        paddingBottom:1
    },
    answer: {
        fontSize: 16,
        textAlign: "center",
        flex: 1,
        borderRadius: 1,
    }
})
import React from 'react'
import {View, Text} from 'react-native'
import {useTheme} from '@react-navigation/native';

const WhoWeAre = () => {
    const {colors} = useTheme();
    return (
        <View>
            <Text style={{color: colors.text}}>Quienes somos</Text>
        </View>
    )
}

export default WhoWeAre
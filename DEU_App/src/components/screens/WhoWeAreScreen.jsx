import React from 'react'
import {View, Text} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme  from '../settings/theme';

const WhoWeAre = () => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <View>
            <Text style={{color: colors.text, fontSize:theme.fontSizes.body}}>Quienes somos</Text>
        </View>
    )
}

export default WhoWeAre
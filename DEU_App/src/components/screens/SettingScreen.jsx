import React, {useState}from 'react'
import {View, Text, Switch} from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import {useTheme} from '@react-navigation/native';
import theme from '../settings/theme'


const SettingScreen = () => {
    const [darkMode, setDarkMode] = useState(false); 
    const {colors} = useTheme();
    return (
        <View>
            <Text style={{color: colors.text}}> Dark Theme </Text>
            <Switch value={darkMode} onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit(
                    "changeTheme", value);
            }}/>
        </View>
    )
}

export default SettingScreen;


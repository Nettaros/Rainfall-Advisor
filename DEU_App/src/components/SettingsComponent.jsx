import React from 'react'
import { View ,Text , ScrollView, TouchableOpacity, } from 'react-native'
import AppModal from "../components/AppModal"
import {useTheme} from '@react-navigation/native';
import Theme from './settings/theme';

const SettingsComponent = ({modalVisible, setModalVisible, settingsOptions, options}) => { 
    const {colors} = useTheme();
    const theme= Theme();
    const returnBody = (clave) =>{
        return(
            <View accessible={true}> 
                {options[clave].map(({name, selected, onPress,hint}) => {
                    return(
                        <View key={name}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityHint={hint}
                                onPress={onPress}
                                style={{
                                    flexDirection: "row",
                                    paddingVertical: 5,
                                    alignItems: "center"
                                }}>
                                {selected && 
                                    <Text 
                                        style={{color:colors.text, paddingLeft:20, fontSize:theme.fontSizes.body}}>->></Text>}
                                {(selected) ? 
                                    <Text accessibilityState={{selected: true}}  style={[{fontSize: theme.fontSizes.body, paddingLeft: selected ? 15 : 30, paddingBottom: 20, paddingTop: 20,color:colors.text}]}>
                                        {name}
                                    </Text> : 
                                    <Text accessibilityState={{selected: false}}  style={[{fontSize: theme.fontSizes.body, paddingLeft: selected ? 15 : 30, paddingBottom: 20, paddingTop: 20,color:colors.text}]}>
                                        {name}
                                    </Text>}
                                
                            </TouchableOpacity>
                            <View style={{height:1, backgroundColor:colors.border}}></View>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View accessible={true}>            
            <ScrollView style={{backgroundColor: colors.background}} >
                {settingsOptions.map(({clave, title, subTitle, onPress, hint}) => 
                    <View key={clave}>
                        <AppModal
                        modalVisible={modalVisible[clave]}
                        title={"Cambiar "+title}
                        modalBody={
                            returnBody(clave)
                        }
                        setModalVisible={setModalVisible[clave]}/>
                        <TouchableOpacity onPress={onPress} accessibilityRole="button" accessibilityHint={hint}>
                            <View style={{
                                paddingTop: 20,
                                paddingLeft: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={[{fontSize:theme.fontSizes.body , color: colors.text}]}>{title}</Text>
                                <Text style={[{fontSize: theme.fontSizes.small, paddingTop: 5, opacity: 0.8,color:colors.text}]}>{subTitle}</Text> 
                            </View>
                            <View style={[{height:1,backgroundColor:colors.border}]}></View>
                        </TouchableOpacity>
                    </View>
                )}
            
            </ScrollView>
        </View>
    )
}

export default SettingsComponent

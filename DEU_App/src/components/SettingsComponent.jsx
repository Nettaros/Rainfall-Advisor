import React, {useState, useEffect} from 'react'
import { View ,Text , ScrollView, TouchableOpacity, Modal, Alert} from 'react-native'
import AppModal from "../components/AppModal"


const SettingsComponent = ({modalVisible, setModalVisible, settingsOptions, options}) => { 
    
    return (
        <>
            <View>
                <AppModal
                    modalVisible={modalVisible}
                    title={"Seleccione"}
                    modalBody={
                        <View>
                            {options.map(({name, selected, onPress}) => {
                                <View key={name}>
                                    <TouchableOpacity
                                        onPress={onPress}
                                        style={{
                                            flexDirection: "row",
                                            paddingVertical: 5,
                                            alignItems: "center"
                                        }}>
                                        {selected && <Text size={30}>*</Text>}
                                        <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>
                                            {name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            })}
                        </View>
                    }
                    setModalVisible={setModalVisible}/>
                    
                <ScrollView style={{backgroundColor: "#fff"}}>
                    {settingsOptions.map(({title, subtitle, onPress}) => 
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View style={{
                            paddingTop: 20,
                            paddingLeft: 20,
                            paddingBottom: 20
                        }}>
                            <Text style={{fontSize: 17}}>{title}</Text>
                            <Text style={{fontSize: 14, paddingTop: 5, opacity: 0.6}}>{subtitle}</Text> 
                        </View>
                        <View style={{height:1, backgroundColor: "#4f4f4f"}}></View>
                    </TouchableOpacity>)}
                </ScrollView>
            </View>
        </>
    )
}

export default SettingsComponent
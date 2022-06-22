import React from 'react'
import { View ,Text , ScrollView, TouchableOpacity} from 'react-native'
import AppModal from "../components/AppModal"


const SettingsComponent = ({modalVisible, setModalVisible, settingsOptions, options}) => { 

    const returnBody = (clave) =>{
        return(
            <View> 
                {options[clave].map(({name, selected, onPress}) => {
                    return(
                        <View key={name}>
                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                    flexDirection: "row",
                                    paddingVertical: 5,
                                    alignItems: "center"
                                }}>
                                {selected && <Text paddingLeft={20} size={30}>*</Text>}
                                <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30, paddingBottom: 20, paddingTop: 20}}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                            <View style={{height:1, backgroundColor: "#4f4f4f"}}></View>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View>            
            <ScrollView style={{backgroundColor: "#fff"}} >
                {settingsOptions.map(({clave, title, subTitle, onPress}) => 
                    <View key={clave}>
                        <AppModal
                        modalVisible={modalVisible[clave]}
                        title={"Cambiar "+title}
                        modalBody={
                            returnBody(clave)
                        }
                        setModalVisible={setModalVisible[clave]}/>
                        <TouchableOpacity onPress={onPress}>
                            <View style={{
                                paddingTop: 20,
                                paddingLeft: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={{fontSize: 17}}>{title}</Text>
                                <Text style={{fontSize: 14, paddingTop: 5, opacity: 0.6}}>{subTitle}</Text> 
                            </View>
                            <View style={{height:1, backgroundColor: "#4f4f4f"}}></View>
                        </TouchableOpacity>
                    </View>
                )}
                
            </ScrollView>
        </View>
    )
}

export default SettingsComponent
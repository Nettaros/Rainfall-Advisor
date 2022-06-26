import React from 'react'
import {View, TouchableOpacity, Text, Modal, ScrollView} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from "./settings/theme"

const AppModal = ({modalVisible, setModalVisible, modalBody, title}) => {
    const {colors} = useTheme();
    const theme = Theme();
    return (
        <Modal acesible={true} visible={modalVisible} animationType="slide" style={{backgroundColor:colors.background}}>
                <View style={{backgroundColor: colors.background, flex:1}}>
                    <ScrollView style={{backgroundColor:colors.background}}>
                        <View style={{
                            flexDirection: "row",
                            padding: 15,
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                            background:colors.background
                        }}>
                            <TouchableOpacity accessibilityLabel='Cerrar' onPress={()=>setModalVisible(false)}>
                                <Text style={[{fontSize: theme.fontSizes.body ,color: colors.text}]}>X</Text>
                            </TouchableOpacity>
                            
                            <Text style={{fontSize: theme.fontSizes.title, color:colors.text}}>{title || "Titulo"}</Text>
                            <Text/>
                            <Text/>
                            <Text/>
                            <Text/>
                        </View>
                        <View style={{height:1, backgroundColor: colors.primary}} />
                        {modalBody}
                    </ScrollView>
                </View>
        </Modal>
    )
}

export default AppModal
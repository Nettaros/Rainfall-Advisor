import React from 'react'
import {View, TouchableOpacity, Text, Modal, ScrollView} from 'react-native'

const AppModal = ({modalVisible, setModalVisible, modalBody, title}) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
                <View style={{backgroundColor: "#fff"}}>
                    <ScrollView>
                        <View style={{
                            flexDirection: "row",
                            padding: 15,
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between"
                        }}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false)
                            }}>
                                <Text fontSize={30}>X</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 20}}>{title || "Titulo"}</Text>
                            <Text/>
                            <Text/>
                            <Text/>
                            <Text/>

                        </View>
                        <View style={{height:1, backgroundColor: "#4f4f4f"}} />
                        {modalBody}
                    </ScrollView>
                </View>
        </Modal>
    )
}

export default AppModal
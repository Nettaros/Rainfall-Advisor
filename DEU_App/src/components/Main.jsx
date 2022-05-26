import React from 'react'
import {View, Text} from 'react-native'

const Main = () => {
    return (
      <View style={{alignItems: "center", justifyContent: "space-between", flex: 1}}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 36, fontStyle: "bold"}}>Nivel de precipitación</Text>
          <Text style={{fontSize: 28, fontStyle: "italic"}}>La Plata</Text>
        </View>
        <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 72, fontStyle: "bold"}}>50</Text>
            <Text style={{fontSize: 72, fontStyle: "bold"}}>mm</Text>
        </View>
        <View style={{flexDirection: "row", alignContent: "space-around", }}>
          <Text style={{fontSize: 20}}>Ultima actualización: </Text>
          <Text style={{fontSize: 20}}>N minutos</Text>
        </View>
      </View>
    )
}

export default Main

import React from 'react'
import {View, Text} from 'react-native'

const MainScreen = () => {
    return (
      <View style={{alignItems: "center"}}>
        <Text>Nivel de precipitación</Text>
        <Text>La Plata</Text>
        <View>
          <Text>50</Text>
          <Text>mm</Text>
        </View>
        <View>
          <Text>Ultima actualización: </Text>
          <Text>N minutos</Text>
        </View>
      </View>
    )
}

export default MainScreen
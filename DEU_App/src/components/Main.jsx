import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { onChange } from 'react-native-reanimated'
import Precipitacion from './hooks/ApiFetch.jsx'

const Main = () => {

  const [minutos, setMinutos] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutos(minutos+1)
    }, 2000)

    return () => clearInterval(timer)
  })

  function resetMinutos() {
    console.log("resetie")
    setMinutos(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Nivel de precipitación</Text>
        <Text style={styles.place}>La Plata</Text>
      </View>
      <View style={styles.row}>
          <Precipitacion style={styles.data} onChange={Main.resetMinutos}/>
          <Text style={styles.data}>mm</Text>
      </View>
      <View style={[styles.info_container, styles.row]}>
        <Text style={styles.info}>Ultima actualización: </Text>
        <Text style={styles.info}>{minutos} minutos</Text>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    justifyContent: "space-between", 
    flex: 1
  },
  info_container: {
    alignContent: "space-around"
  },
  title_container: {
    alignItems: "center"
  },
  title: {
    fontSize: 36, 
    fontStyle: "bold"
  },
  place: {
    fontSize: 28, 
    fontStyle: "italic"
  },
  data: {
    fontSize: 72, 
    fontStyle: "bold"
  },
  info: {
    fontSize: 20
  },
  row: {
    flexDirection: "row"
  }
})
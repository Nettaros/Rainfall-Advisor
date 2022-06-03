import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { onChange } from 'react-native-reanimated'
import Precipitacion from './hooks/ApiFetch.jsx'

const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const [minutos, setMinutos] = useState(0)
  const updateMin = 3;
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"

 
  const fetchPrecipitacion = async () => {
    const response = await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no")
    const json = await response.json()
    setPrecipitacion(json.current.precip_mm)
   //setPrecipitacion(Math.random())
  }

  useEffect(()=>{
    fetchPrecipitacion()
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutos == updateMin){
        setMinutos(0)
        fetchPrecipitacion()
      }else{
        setMinutos(minutos+1)
      }
       
    }, 2000)
    return () => clearInterval(timer)
  })

  

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Nivel de precipitación</Text>
        <Text style={styles.place}>La Plata</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.data}>{precipitacion}</Text>
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
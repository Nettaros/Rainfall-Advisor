import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import { LinearGradient } from 'expo-linear-gradient'
import * as Notification from "expo-notifications"



const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const [minutos, setMinutos] = useState(0)
  const updateMin = 3;
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"
 
  const fetchPrecipitacion = async () => {
    //const response = await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no")
    //const json = await response.json()
    //setPrecipitacion(json.current.precip_mm)
    setPrecipitacion(Math.round(Math.random()*100))
  }

  Notification.setNotificationHandler({
    handleNotification: async() => {
      return {
        shouldPlaySound: true,
        shouldShowAlert: true
      }
    }
  })

  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Esta lloviendo mucho!",
        body: "La lluvia esta pasando los 50mm en este momento, estate atento!"
      },
      trigger: null
    })
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

  useEffect(() => {
    if(precipitacion > 50){
      handleNotification()
    }
  }, [precipitacion])


  return (
    <LinearGradient colors={['rgba(0, 91, 234,0.9)','rgba(0, 198, 251,0.9)','rgba(0, 91, 234,0.9)']} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Nivel de precipitación</Text>
          <Text style={styles.place}>La Plata</Text>
        </View>
        
        <View style={[styles.background_precipitation]}>
          
          <View style={[styles.container_pecipitation, styles.row]}>
            <Text style={styles.data}>{precipitacion}</Text>
            <Text style={styles.data}>mm</Text>
          </View>
          <RNSpeedometer 
            value={precipitacion} 
            size={150} 
            maxValue={100}
            minValue={0}
            allowedDecimals={1}
            defaultValue={0}
            labelNoteStyle={styles.speedometer}
            labels={[
              {
                name: 'Sin riesgo',
                labelColor: 'black',
                activeBarColor: 'green'
              },
              {
                name: 'Bajo riesgo',
                labelColor: 'black',
                activeBarColor: 'yellow'
              },
              {
                name: 'Riesgo intermedio',
                labelColor: 'black',
                activeBarColor: 'orange'
              },
              {
                name: 'Alto riesgo',
                labelColor: 'black',
                activeBarColor: 'red'
              }
            ]}
            />

        </View>
        <View style={[styles.info_container, styles.row]}>
          <Text style={styles.info}>Ultima actualización: </Text>
          <Text style={styles.info}>{minutos} minutos</Text>
        </View>
      
      </View>
    </LinearGradient>
  )
}

export default Main

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    alignItems: "center", 
    justifyContent: "space-between", 
    flex:1
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
    fontStyle: "bold",
    
  },
  info: {
    fontSize: 20
  },
  row: {
    flexDirection: "row",
  },
  background_precipitation:{
    backgroundColor: 'rgba(255,255,255,0.20)',
    borderRadius: 15,
    paddingBottom:100
    
  },
  container_pecipitation:{
    margin: 50,
    marginTop: 80,
    marginBottom: 20,
   
  },
  speedometer:{
    fontSize:20,
    justifyContent:"center"
  },
  
})

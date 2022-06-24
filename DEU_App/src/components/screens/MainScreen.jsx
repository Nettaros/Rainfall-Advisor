import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme.jsx';
import { LinearGradient } from 'expo-linear-gradient'
import * as Notification from "expo-notifications"




const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const [minutos, setMinutos] = useState(0)
  const updateMin = 3;
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"
  const {colors} = useTheme();
  const theme= Theme();
  


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
    <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: theme.fontSizes.title,fontStyle: "bold", color:colors.text}}>Nivel de precipitación</Text>
          <Text style={{fontSize: theme.fontSizes.subheading,fontStyle: "italic", color:colors.text}}>La Plata</Text>
        </View>
        
        <View style={{backgroundColor:colors.primary, borderRadius:10}}>
          <RNSpeedometer 
              value={precipitacion} 
              size={150} 
              maxValue={100}
              minValue={0}
              allowedDecimals={0}
              defaultValue={0}
              labelNoteStyle={{fontSize:theme.fontSizes.body,justifyContent:"center", color:colors.text}}
              labels={[
                {
                  name: 'Sin riesgo',
                  labelColor: colors.text,
                  activeBarColor: 'green'
                },
                {
                  name: 'Bajo riesgo',
                  labelColor: colors.text,
                  activeBarColor: 'yellow'
                },
                {
                  name: 'Riesgo intermedio',
                  labelColor: colors.text,
                  activeBarColor: 'orange'
                },
                {
                  name: 'Alto riesgo',
                  labelColor: colors.text,
                  activeBarColor: 'red'
                }
              ]}
              />
            <View style={[styles.container_pecipitation, styles.row]}>
              <Text style={{fontSize: theme.fontSizes.body, fontStyle: "bold",color: colors.text}}>{precipitacion}</Text>
              <Text style={{fontStyle: "bold",fontSize:theme.fontSizes.body ,color:colors.text}}>mm</Text>
            </View>
          </View>

        <View style={[styles.info_container, styles.row]}>
          <Text style={{fontSize: theme.fontSizes.body,color: colors.text}}>Ultima actualización: </Text>
          <Text style={{fontSize: theme.fontSizes.body,color: colors.text}}>{minutos} minutos</Text>
        </View>
      
      </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    justifyContent: "space-between", 
    flex:1
  },
  info_container: {
    alignContent: "space-around"
  },
  row: {
    flexDirection: "row",
  },
  container_pecipitation:{
    margin: 50,
    marginTop: 80,
    marginBottom: 20,
    padding:1
  }
})

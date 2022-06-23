import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import {useTheme} from '@react-navigation/native';



const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const [minutos, setMinutos] = useState(0)
  const updateMin = 3;
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"
  const {colors} = useTheme();
 
  const fetchPrecipitacion = async () => {
    //const response = await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no")
    //const json = await response.json()
    //setPrecipitacion(json.current.precip_mm)
    setPrecipitacion(Math.round(Math.random()*100))
  }

  /*async function onDisplayNotification() {
    await notifee.requestPermission()
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel"
    })

    await notifee.displayNotification({
      title: "Titulo",
      body: "Contenido de la noti",
      android: {
        channelId
      }
    })
  }*/

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

  /*useEffect(() => {
    if(precipitacion > 60){
      onDisplayNotification()
    }
  }, [precipitacion])*/


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={[styles.title, {color: colors.text}]}>Nivel de precipitación</Text>
          <Text style={[styles.place, {color: colors.text}]}>La Plata</Text>
        </View>
        
        <View style={[styles.background_precipitation, {backgroundColor: colors.primary}]}>
          
          <View style={[styles.container_pecipitation, styles.row]}>
            <Text style={[styles.data, {color: colors.text}]}>{precipitacion}</Text>
            <Text style={[styles.data, {color:colors.text}]}>mm</Text>
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

        </View>
        <View style={[styles.info_container, styles.row]}>
          <Text style={[styles.info, {color: colors.text}]}>Ultima actualización: </Text>
          <Text style={[styles.info, {color: colors.text}]}>{minutos} minutos</Text>
        </View>
      
      </View>
    </View>
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

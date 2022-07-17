import React, {useEffect, useState, Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme.jsx';
import * as Notification from "expo-notifications"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { EventRegister } from 'react-native-event-listeners'
import TimerMixin from 'react-timer-mixin';
import Settings from '../settings/Settings.jsx'


const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"
  const {colors} = useTheme();
  const theme= Theme();
  const [date, setDate] = useState(null)

  const fetchPrecipitacion = async () => {
    const response = await(await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no", 
    {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': "*"
      }
    }))
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
    Notification.dismissAllNotificationsAsync();
    Notification.scheduleNotificationAsync({
      content: {
        title: "Esta lloviendo mucho!",
        body: "La lluvia esta pasando los 50mm en este momento, estate atento!"
      },
      trigger: null
    })
  }

  const convertMillisecToDate = (millisec) =>{
    const fecha = new Date(millisec);
    return  fecha.toLocaleString();
  }
  
  const updateTime = async () =>{
    const now = new Date().getTime();
    const stringifiedValue = JSON.stringify(now)
    AsyncStorage.setItem("lastUpdate", stringifiedValue);
    EventRegister.emit("changeLastUpdate", now);
    setDate(convertMillisecToDate(now));
  }

  useEffect(()=>{
    setDate(convertMillisecToDate(theme.lastUpdate.millisec));
  },[theme.lastUpdate.millisec])


  /*useEffect(()=>{
    if(theme.updateTime.seconds != 0  &&  theme.updateTime.seconds!= null){
      fetchPrecipitacion();
      updateTime()
    }
  },[])*/

  const cantSec =()=>{
    const nowMillisec = new Date().getTime()
    return ((nowMillisec - theme.lastUpdate.millisec)/1000)*60;
  }

  class Timer extends Component {
    componentDidMount(){
      TimerMixin.setInterval.call(() => {
        if(theme.updateTime.seconds != null && theme.updateTime.seconds != 0){
          if (cantSec() >= theme.updateTime.seconds){ 
            //fetchPrecipitacion()
            updateTime()
          }
        }
      }, 1000)
    }

  }

  const tim = new Timer()
  tim.componentDidMount()
  /*useEffect(() => {
    const timer = setInterval(() => {
      
    }, 1000)
    return () => clearInterval(timer)
  },[])*/

  useEffect(() => {
    if(precipitacion > 50){
      handleNotification()
    }
  }, [precipitacion])


  return (
    <View style={styles.container} accessible={true}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: theme.fontSizes.title, fontWeight: "bold", color:colors.text}}>Nivel de precipitación</Text>
          <Text style={{fontSize: theme.fontSizes.subheading,fontStyle: "italic", color:colors.text}}>La Plata</Text>
        </View>
        
        <View style={{backgroundColor:colors.card, borderRadius:30, paddingLeft: 50, paddingRight: 50, paddingTop: 150, paddingBottom:150}}>
          <RNSpeedometer
              accessibleRole="image"
              value={precipitacion} 
              size={250} 
              maxValue={100}
              minValue={0}
              allowedDecimals={1}
              defaultValue={0}
              labelNoteStyle={{fontSize:theme.fontSizes.body,justifyContent:"center", color: "#000000"}}
              labels={[
                {
                  name: ((precipitacion != 1) ? "milímetros" : "milímetro") + "\nSin riesgo",
                  labelColor: colors.text,
                  labelNoteStyle: {alignContent: "center"},
                  activeBarColor: 'green'
                },
                {
                  name: ((precipitacion != 1) ? "milimetros" : "milimetro") + "\nRiesgo bajo",
                  labelColor: colors.text,
                  labelNoteStyle: {alignContent: "center"},
                  activeBarColor: 'yellow'
                },
                {
                  name: ((precipitacion != 1) ? "milimetros" : "milimetro") + "\nRiesgo intermedio",
                  labelColor: colors.text,
                  labelNoteStyle: {alignContent: "center"},
                  activeBarColor: 'orange'
                },
                {
                  name: ((precipitacion != 1) ? "milimetros" : "milimetro") + "\nRiesgo Alto",
                  labelColor: colors.text,
                  labelNoteStyle: {alignContent: "center"},
                  activeBarColor: 'red'
                }
              ]}
              />
          </View>
        <Button onPress={updateTime} 
          title="Actualizar precipitación"
          accessibilityLabel="Actualizar precipitación" 
        />
        <View style={[styles.info_container, styles.row]}>
          <Text style={{fontSize: theme.fontSizes.body,color: colors.text}}>Ultima actualización: {date}</Text>
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

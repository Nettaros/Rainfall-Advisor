import React, {useEffect, useState, Component} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme.jsx';
import * as Notification from "expo-notifications"
import * as RootNavigation from '../../navigation/RootNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners'
import TimerMixin from 'react-timer-mixin';
import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core.js';



const Main = () => {
  const [precipitacion, setPrecipitacion] = useState(0.0)
  const key = "4eca0073128e406ba75160847222905"
  const place = "La Plata"
  const {colors} = useTheme();
  const theme = Theme();
  const [date, setDate] = useState(null)

  console.log("letra subheading: ", theme.fontSizes.subheading)
  console.log("letra title: ", theme.fontSizes.title)

  const fetchPrecipitacion = async () => {
    /*const response = (await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no", 
    {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': "*"
      }
    }))
    const json = await response.json()
    setPrecipitacion(json.current.precip_mm)*/
    setPrecipitacion(Math.round(Math.random()*100))
  }
  
  const handleNotification = () => {
    Notification.dismissAllNotificationsAsync();
    Notification.scheduleNotificationAsync({
      content: {
        title: "Esta lloviendo mucho!",
        body: "La lluvia esta pasando los 50mm en este momento, estate atento!",
        categoryIdentifier: "recommendation_question"
        
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
    fetchPrecipitacion()
  }

  const cantSec =()=>{
    const nowMillisec = new Date().getTime()
    return ((nowMillisec - theme.lastUpdate.millisec)/1000)*60;
  }
  /*
  Notification.setNotificationHandler({
    handleNotification: async() => {
      return {
        shouldPlaySound: true,
        shouldShowAlert: true
      }
    }
  })

  Notification.setNotificationCategoryAsync("recommendation_question",[
    {
      identifier: 'send_recommendation',
      buttonTitle: 'Ir a recomendaciones'
    } 
  ]);*/ 

  useEffect(()=>{
    async function getIsAppFirstLaunched(){
      const appData = await AsyncStorage.getItem('isAppFirstLaunched')
      if(appData == null){
        await AsyncStorage.setItem('isAppFirstLaunched', "false")
        RootNavigation.navigate("Guia de inicio")
      }
    }
    getIsAppFirstLaunched()
    return ()=>{}
  },[])

  /*useEffect(()=>{
    Notification.addNotificationResponseReceivedListener(response =>{
        RootNavigation.navigate("Recomendaciones","Durante")
    });
  },[])*/

  useEffect(()=>{
    if(theme.updateTime.seconds != 0  &&  theme.updateTime.seconds!= null){
      updateTime()
    }
  },[])

  useEffect(()=>{
    setDate(convertMillisecToDate(theme.lastUpdate.millisec));
  },[theme.lastUpdate.millisec])

  useEffect(() => {
    const timer = setInterval(() => {
      if(theme.updateTime.seconds != null && theme.updateTime.seconds != 0){
        if (cantSec() >= theme.updateTime.seconds){ 
          updateTime()
        }
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  
  useEffect(() => {
    if(precipitacion > 50){
      //handleNotification()
    }
  },[precipitacion])

  

  return (
    <View style={{flex:1, borderWidth:((precipitacion>65)?4:0), borderColor:((precipitacion>65)?'red':null)}}>
      <View style={{justifyContent:'flex-end', flexDirection:'row', margin:5}}>
          <TouchableOpacity accessibilityRole="button" >
              <Text style={[styles.text, {fontSize: theme.fontSizes.title, color: colors.text, backgroundColor: colors.primary}]} 
                    onPress={() => { RootNavigation.navigate("Guia de inicio")}}> ?</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.container} accessible={true}> 
        <View style={{alignItems:'center', paddingTop:5}} >
          <Text style={{fontSize: theme.fontSizes.title, fontWeight: "bold", color:colors.text}}>Nivel de precipitación</Text>
          <Text style={{fontSize: theme.fontSizes.subheading, fontStyle: "italic", color:colors.text}}>Zona de La Plata</Text>
        </View>
        
        <View style={{backgroundColor:colors.card, borderRadius:30, paddingLeft: 50, paddingRight: 50, paddingTop: 150, paddingBottom:150,
        borderWidth:((precipitacion>65)?4:0), borderColor:((precipitacion>65)?'red':null)}}>
          <RNSpeedometer
              accessibleRole="image"
              value={precipitacion} 
              size={250} 
              maxValue={100}
              minValue={0}
              allowedDecimals={1}
              defaultValue={0}
              labelNoteStyle={{fontSize:((precipitacion>65)?theme.fontSizes.subheading:theme.fontSizes.body), justifyContent:"center", color: "#000000"}}
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
          <Text style={{fontSize: theme.fontSizes.body, color: colors.text}}>Ultima actualización: {date}</Text>
        </View>
      
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
    marginBottom: 10,
    padding:1
  },
  text: {
    borderRadius:5,
    alignContent:'center',
    alignItems:'center',
    paddingRight:10,
    margin:5,
    paddingLeft:2
}
})

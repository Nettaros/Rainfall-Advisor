import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners';

export default function Settings(){
  const [fontSize, setFontSize] = useState(null);
  const [fetchCoolDown, setFetchCoolDown]= useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const appFontSize = fontSize
  const appUpdateTime= fetchCoolDown
  //const appLastUpdate = lastUpdate

  const saveSetting = (key, value) => {
    const stringifiedValue = JSON.stringify(value)
    AsyncStorage.removeItem(key)
    AsyncStorage.setItem(key, stringifiedValue);
  };


  useEffect(async()=>{
    try{
      const setting = await AsyncStorage.multiGet(["fontSize","updateTime"]);
      if(setting){
        setFontSize(JSON.stringify(setting[0][1]));
        setFetchCoolDown(JSON.stringify(setting[1][1]));
      }else{
        setFontSize(JSON.stringify(20));
        saveSetting("fontSize",20);
        setFetchCoolDown(JSON.stringify(900));
        saveSetting("updateTime", 900)
      }
    }catch(error){
      console.log(error);
    }



  })  

  useEffect(()=>{
    AsyncStorage.getItem("lastUpdate").then(
      data => {
        if(data){
          const value = JSON.parse(data);
          setLastUpdate(value);
        }else{
          setLastUpdate(null);
        }
      }
    ).catch((error) => {
      console.log(error);
    })
  });

  useEffect(()=>{
    let eventRegister = EventRegister.addEventListener(
      "changeFontSize", value =>{
        setFontSize(value);
      }
    )
    return () => {
      EventRegister.removeAllListeners(eventRegister);
    }
  },[]);

  useEffect(()=>{
    let eventRegister = EventRegister.addEventListener(
      "changeTime" , value =>{
        setFetchCoolDown(value);
      }
    )
    return ()=>{
      EventRegister.removeAllListeners(eventRegister);
    }
  },[])

  useEffect(()=>{
    let eventRegister = EventRegister.addEventListener(
      "changeLastUpdate" , value => {
        setLastUpdate(value);
        saveSetting("lastUpdate", value)
      }
    )
    return ()=>{
      EventRegister.removeAllListeners(eventRegister);
    }
  },[])

  return({
    fontSize: appFontSize,
    fetchCoolDown: appUpdateTime,
    lastUpdate: lastUpdate
  });
}

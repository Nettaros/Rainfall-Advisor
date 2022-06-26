import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners';

export default function Settings(){
  const [fontSize, setFontSize] = useState(null);
  const [fetchCoolDown, setFetchCoolDown]= useState(900);
  const appFontSize = (fontSize === 16)?16:((fontSize === 20)?20:24)
  const appUpdateTime= (fetchCoolDown ===900)?900:((fetchCoolDown === 1800)?1800:2700)

  useEffect( ()=>{
    AsyncStorage.getItem("updateTime").then(
     data => {
       if(data){
           const value = JSON.parse(data);
           setFetchCoolDown(value)
         

       }else{
           setFetchCoolDown(900);
       }
     }
   ).catch((error) => {
     console.log(error);
   })
  });
  useEffect(()=>{
    AsyncStorage.getItem("fontSize").then(
      data => {
        if(data){
          const value = JSON.parse(data);
          setFontSize(value);
          
        }else{
         setFontSize(20);
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

  return({
    fontSize: appFontSize,
    fetchCoolDown: appUpdateTime
  });
}

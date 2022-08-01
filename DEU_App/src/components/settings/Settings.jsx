import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners';
import {lightTheme, darkTheme} from "../settings/themeMode"

export default function Settings(){
  const [fontSize, setFontSize] = useState(null);
  const [fetchCoolDown, setFetchCoolDown]= useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [subheading, setSubheading] = useState(null);
  const [title, setTitle] = useState(null);
  const [small, setSmall] = useState(null);
  const [darkApp, setDarkApp] = useState(null);
  const appTheme = darkApp ? darkTheme : (!darkApp ? lightTheme : null);
 
  //const appLastUpdate = lastUpdate

  const saveSetting = (key, value) => {
    const stringifiedValue = JSON.stringify(value)
    AsyncStorage.removeItem(key)
    AsyncStorage.setItem(key, stringifiedValue);
  };
  
  useEffect(()=>{
    async function fetchData(){
      try{
        await AsyncStorage.multiGet(
          ["fontSize","subheading","title","small","updateTime","theme"]
        ).then((setting) => {   
          if((setting)&&(setting[0][1]&&setting[1][1]&&setting[2][1]&&setting[3][1]&&setting[4][1])){
            setFontSize(parseFloat(JSON.parse(setting[0][1])));
            setSubheading(parseFloat(JSON.parse(setting[1][1])));
            setTitle(parseFloat(JSON.parse(setting[2][1])));
            setSmall(parseFloat(JSON.parse(setting[3][1])));
            setFetchCoolDown(parseFloat(JSON.parse(setting[4][1])));
            setDarkApp((JSON.parse(setting[5][1]) === "dark")?true:false);
          }else{
            setFontSize(20);
            setSubheading(22);
            setSmall(18);
            setTitle(24);
            saveSetting("fontSize",20);
            saveSetting("subheading",22);
            saveSetting("title", 24);
            saveSetting("small",18)
            setFetchCoolDown(900);
            saveSetting("updateTime", 900)
            setDarkApp(false)
            saveSetting("theme", "light")
          }})
      }catch(error){
        console.log(error);
      }
    }
    fetchData()
  },[]);

  useEffect(()=>{
    async function getLastUpdate(){
      try{
        const lastUpdate = await AsyncStorage.getItem("lastUpdate")
        if(lastUpdate){
          setLastUpdate(JSON.parse(lastUpdate))
        }else{
          const nowMillisec = new Date().getTime()
          setLastUpdate(JSON.parse(nowMillisec))
        }
      }catch(error){
        console.log(error);
      }
    }
    getLastUpdate()
  },[]);

  useEffect(()=>{
    let eventRegister = EventRegister.addEventListener(
      "changeFontSize", value =>{
        setFontSize(value);
        setSubheading(value+2);
        setTitle(value+4)
        setSmall(value-2)
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

  useEffect(()=>{
    let eventRegister = EventRegister.addEventListener(
      "changeTheme", value =>{
        setDarkApp(value);
        saveSetting("theme", value)
      }
    )
    return () => {
      EventRegister.removeEventListener(eventRegister);
    };
  }, []);

  return({
    fontSizes: {
      body: fontSize,
      subheading: subheading,
      title: title,
      small: small
    },
    updateTime: {
        seconds: fetchCoolDown
    },
    lastUpdate:{
        millisec: lastUpdate
    },
    theme: appTheme
  });
}

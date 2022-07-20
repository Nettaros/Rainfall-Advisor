import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners';

export default function Settings(){
  const [fontSize, setFontSize] = useState();
  const [fetchCoolDown, setFetchCoolDown]= useState();
  const [lastUpdate, setLastUpdate] = useState();
  const [subheading, setSubheading] = useState();
  const [title, setTitle] = useState();
  const [small, setSmall] = useState()
 
  //const appLastUpdate = lastUpdate

  const saveSetting = (key, value) => {
    const stringifiedValue = JSON.stringify(value)
    AsyncStorage.removeItem(key)
    AsyncStorage.setItem(key, stringifiedValue);
  };

  const parseInt = (value) => {
    return Number(value)
  };

  useEffect(()=>{
    async function fetchData(){
      try{
        const setting = await AsyncStorage.multiGet(["fontSize","subheading","title","small","updateTime"]);        
        if((setting)&&(setting[0][1])){
          setFontSize(parseInt(setting[0][1]));
          setSubheading(parseInt(setting[1][1]));
          console.log("Letra grande: ",setting)
          setTitle(parseInt(setting[2][1]));
          setSmall(parseInt(setting[3][1]));
          setFetchCoolDown(parseInt(setting[4][1]));
        }else{
          setFontSize(JSON.stringify(20));
          saveSetting("fontSize",20);
          saveSetting("subheading",22);
          saveSetting("title", 24);
          saveSetting("small",18)
          setFetchCoolDown(JSON.stringify(900));
          saveSetting("updateTime", 900)
        }
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

  return({
    fontSize: fontSize,
    fetchCoolDown: fetchCoolDown,
    lastUpdate: lastUpdate,
    subheading: subheading,
    title: title,
    small: small
  });
}

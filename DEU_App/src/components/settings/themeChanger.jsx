import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react'
import { EventRegister } from 'react-native-event-listeners';
import { lightTheme , darkTheme } from './themeMode'

export default function themeChanger() {
    const [darkApp, setDarkApp] = useState(false);
    const appTheme = darkApp?darkTheme:lightTheme;
    useEffect(()=>{
      AsyncStorage.getItem("theme").then(
        data => {
          if(data){
            const value = JSON.parse(data);
            setDarkApp((value === "light")?false:true);

          }else{
            setDarkApp(false);
          }
        }
      ).catch((error) => {
        console.log(error);
      } )
        
    });
    
    useEffect(()=>{
        let eventRegister = EventRegister.addEventListener(
          "changeTheme", value =>{
            setDarkApp(value);
          }
        )
        return () => {
          EventRegister.removeEventListener(eventRegister);
        };
    }, []);

    return (
        appTheme
    );
}

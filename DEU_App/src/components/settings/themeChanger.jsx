import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react'
import { EventRegister } from 'react-native-event-listeners';
import { lightTheme , darkTheme } from './themeMode'

export default function themeChanger() {
    const [darkApp, setDarkApp] = useState(false);
    const appTheme = darkApp?darkTheme:lightTheme;

    useEffect(()=>{
      async function getTheme(){
        try{
          const theme = await AsyncStorage.getItem("theme");
          if(theme){
            const value = JSON.parse(data);
            setDarkApp((value === "light")?false:true);
          }else{
            setDarkApp(false)
          }
        }catch(error){
          console.log(error)
        }
      }
      getTheme()   
    },[]);
    
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

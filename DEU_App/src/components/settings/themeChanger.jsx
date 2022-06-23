import React, {useState, useEffect} from 'react'
import { EventRegister } from 'react-native-event-listeners';
import { lightTheme , darkTheme } from './themeMode'

export default function themeChanger() {
    const [darkApp, setDarkApp] = useState(false);
    const appTheme = darkApp?darkTheme:lightTheme;
    
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

import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import SettingsComponent from '../SettingsComponent';
import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useTheme} from '@react-navigation/native';

//import * as SplashScreen from "expo-splash-screen"
//import { useCallback } from 'react/cjs/react.production.min';

const SettingScreen = () => {
    const [ready, setReady] = useState(false)
    const [fontSize, setFontSize] = React.useState(null);
    const [updateTime, setUpdateTime] = React.useState(null)
    const [theme, setTheme] = React.useState(null);
    const [fontSizeModalVisible, setFontSizeModalVisible] = React.useState(false);
    const [updateTimeModalVisible, setUpdateTimeModalVisible] = React.useState(false);
    const [themeVisible, setThemeVisible] = React.useState(false);

    const {colors} = useTheme();
    

    useEffect(() => {
      getSettings()
    }, []);
    
    const saveSetting = (key, value) => {
      const stringifiedValue = JSON.stringify(value)
      AsyncStorage.setItem(key, stringifiedValue);
    };

    const toMinutes = (seconds) => {
      const min = seconds/60
      return min +" minutos"
    }

    const toSize = (size) => {
      if(size === 16){
        return "Chica"
      }
      if(size === 20){
        return "Mediana"
      }
      else{
        return "Grande"
      }
    }

    const settingsOptions = [
      {
        clave: "fontSize",
        title: "Tamaño de letra",
        subTitle: toSize(fontSize),
        onPress: () => {
          setFontSizeModalVisible(true);
        },
        hint: "Tamaño de letra. Seleccionado el tamaño de letra"+toSize(fontSize)  
      },
      {
        clave: "updateTime",
        title: "Tiempo de actualización",
        subTitle: toMinutes(updateTime),
        onPress: () => {
          setUpdateTimeModalVisible(true);
        },
        hint: "Tiempo de actualización. Seleccionado el tiempo de actualizacion cada"+toMinutes(updateTime) 

      },
      {
          clave: "theme",
          title: "Tema",
          subTitle: (theme === "light")?"Tema claro":"Tema oscuro" ,
          onPress: () => {
            setThemeVisible(true);
          },
          hint: "Tema de la aplicación. Seleccionado el tema"+((theme === "light")?"claro":"oscuro")
      }
    ];
  
    const options = {
      fontSize: [
        {
          name: "Chica",
          selected: fontSize === 16,
          onPress: () => {
            saveSetting('fontSize', 16)
            setFontSize(16)
            EventRegister.emit("changeFontSize", 16);
            setFontSizeModalVisible(false)
          },
          hint: "Letra chica"+((fontSize === 16)?". Seleccionada":"")
        },
        {
          name: "Mediana",
          selected: fontSize === 20,
          onPress: () => {
            saveSetting("fontSize", 20)
            setFontSize(20)
            EventRegister.emit("changeFontSize", 20);
            setFontSizeModalVisible(false)
          },
          hint: "Letra mediana"+((fontSize === 20)?". Seleccionada":"")
          
        },
        {
          name: "Grande",
          selected: fontSize === 24,
          onPress: () => {
            saveSetting("fontSize", 24)
            setFontSize(24)
            EventRegister.emit("changeFontSize", 24);
            setFontSizeModalVisible(false)
          },
          hint: "Letra grande"+((fontSize === 24)?". Seleccionada":"")
        }
      ],
      updateTime: [
        {
          name: "15 minutos",
          selected: updateTime === 900,
          onPress: () => {
            saveSetting("updateTime", 900)
            setUpdateTime(900)
            EventRegister.emit("changeTime", 900);
            setUpdateTimeModalVisible(false)
          },
          hint: "Tiempo de actualización cada 15 minutos"+((updateTime === 900)?". Seleccionado":"")
        },
        {
          name: "30 minutos",
          selected: updateTime === 1800,
          onPress: () => {
            saveSetting("updateTime", 1800)
            setUpdateTime(1800)
            EventRegister.emit("changeTime", 1800);
            setUpdateTimeModalVisible(false)
          },
          hint: "Tiempo de actualización cada 30 minutos"+((updateTime === 1800)?".Seleccionado":"")
        },
        {
          name: "45 minutos",
          selected: updateTime === 2700,
          onPress: () => {
            saveSetting("updateTime", 2700)
            setUpdateTime(2700)
            EventRegister.emit("changeTime", 2700);
            setUpdateTimeModalVisible(false)
          },
          hint: "Tiempo de actualización cada 45 minutos"+((updateTime === 2700)?". Seleccionado":"")
        }
      ],
      theme:[
        {
          name: "Tema claro",
          selected: theme === "light",
          onPress: () => {
            saveSetting("theme","light")
            setTheme("light")
            EventRegister.emit("changeTheme", false);
            setThemeVisible(false)
          },
          hint: "Tema claro "+((theme === "light")?". Seleccionado":"")
        },
        {
          name: "Tema oscuro",
          selected: theme === "dark",
          onPress: () => {
            saveSetting("theme","dark")
            setTheme("dark")
            EventRegister.emit("changeTheme", true);
            setThemeVisible(false)
          },
          hint: "Tema oscuro"+((theme === "dark")?". seleccionado":"")
        }
      ]
    };
  
    const getSettings = () => {
      AsyncStorage.getItem("fontSize").then(data => {
          if(data){
            setFontSize(JSON.parse(data));
          }else{
              setFontSize(16)
              const value = JSON.stringify(16)
              AsyncStorage.setItem("fontSize", value)
          }

          AsyncStorage.getItem("updateTime").then(data => {
            if(data){
              setUpdateTime(JSON.parse(data));
            }else{
                setUpdateTime(900)
                const value = JSON.stringify(900)
                AsyncStorage.setItem("updateTime", value)
            }
            
            AsyncStorage.getItem("theme").then(data =>{
              if (data){
                setTheme(JSON.parse(data));
              }else{
                setTheme("light")
                const value = JSON.stringify("light")
                AsyncStorage.setItem("theme", value)
              }

              setReady(true)
            }).catch((error) => console.log(error));
        
          }).catch((error) => console.log(error));

      }).catch((error) => console.log(error));
    
    };
    
    return (
      <View style={{backgroundColor:colors.background}}>
         
        {!ready 
        ? 
        <View style={{backgroundColor:colors.background}}></View>
        : 
        <SettingsComponent
            
              modalVisible={
                {
                  fontSize: fontSizeModalVisible,
                  updateTime: updateTimeModalVisible,
                  theme: themeVisible
                }
              }
              setModalVisible={
                {
                  fontSize: setFontSizeModalVisible, 
                  updateTime: setUpdateTimeModalVisible,
                  theme: setThemeVisible
                }
              }
              settingsOptions={settingsOptions}
              options={options}
          />     
        }  
      </View>

    );
  };


export default SettingScreen;


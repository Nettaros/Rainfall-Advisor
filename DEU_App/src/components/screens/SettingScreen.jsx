import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import SettingsComponent from '../SettingsComponent';
import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useTheme} from '@react-navigation/native';

const SettingScreen = () => {
    const [ready, setReady] = useState(false)
    const [fontSize, setFontSize] = useState(null);
    const [updateTime, setUpdateTime] = useState(null)
    const [theme, setTheme] = useState(null);
    const [fontSizeModalVisible, setFontSizeModalVisible] = useState(false);
    const [updateTimeModalVisible, setUpdateTimeModalVisible] = useState(false);
    const [themeVisible, setThemeVisible] = useState(false);
    const {colors} = useTheme();
    
    useEffect(() => {
      getSettings()
    }, []);
    
    const saveSetting = async (key, value) => {
      const stringifiedValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, stringifiedValue);
    };

    const updateSetting=async (key, value) =>{
      try{
        await AsyncStorage.removeItem(key)
        const stringifiedValue = JSON.stringify(value);
        saveSetting(key, stringifiedValue)
      }catch(error){
        console.log(error)
      }
    }

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
        hint: "Tiempo de actualización."+((updateTime === 0)? "Actualización automática desactivada.":"Seleccionado el tiempo de actualizacion cada"+toMinutes(updateTime))

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
            updateSetting("fontSize", 16)
            updateSetting("subheding",18);
            updateSetting("title", 20);
            updateSetting("small", 14);
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
            updateSetting("fontSize", 20)
            setFontSize(20)
            updateSetting("subheding",22);
            updateSetting("title", 24);
            updateSetting("small", 18);
            EventRegister.emit("changeFontSize", 20);
            setFontSizeModalVisible(false)
          },
          hint: "Letra mediana"+((fontSize === 20)?". Seleccionada":"")
          
        },
        {
          name: "Grande",
          selected: fontSize === 24,
          onPress: () => {
            updateSetting("fontSize", 24);
            updateSetting("subheding",26);
            updateSetting("title", 28);
            updateSetting("small", 22);
            setFontSize(24)
            EventRegister.emit("changeFontSize", 24);
            setFontSizeModalVisible(false)
          },
          hint: "Letra grande"+((fontSize === 24)?". Seleccionada":"")
        }
      ],
      updateTime: [
        {
          name: "Desactivado",
          selected: updateTime === 0,
          onPress: () => {
            updateSetting("updateTime", 0);
            setUpdateTime(0);
            EventRegister.emit("changeTime", 0);
            setUpdateTimeModalVisible(false);
          },
          hint: "Tiempo de actualización automático desactivado"+((updateTime === 0)? ". Seleccionado":"")
        },
        {
          name: "15 minutos",
          selected: updateTime === 900,
          onPress: () => {
            updateSetting("updateTime", 900);
            setUpdateTime(900);
            EventRegister.emit("changeTime", 900);
            setUpdateTimeModalVisible(false);
          },
          hint: "Tiempo de actualización cada 15 minutos"+((updateTime === 900)?". Seleccionado":"")
        },
        {
          name: "30 minutos",
          selected: updateTime === 1800,
          onPress: () => {
            updateSetting("updateTime", 1800);
            setUpdateTime(1800);
            EventRegister.emit("changeTime", 1800);
            setUpdateTimeModalVisible(false);
          },
          hint: "Tiempo de actualización cada 30 minutos"+((updateTime === 1800)?".Seleccionado":"")
        },
        {
          name: "45 minutos",
          selected: updateTime === 2700,
          onPress: () => {
            updateSetting("updateTime", 2700)
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
            updateSetting("theme","light")
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
            updateSetting("theme","dark")
            setTheme("dark")
            EventRegister.emit("changeTheme", true);
            setThemeVisible(false)
          },
          hint: "Tema oscuro"+((theme === "dark")?". seleccionado":"")
        }
      ]
    };
  
    const getSettings = async () => {
      try{
        const setting = await AsyncStorage.multiGet(["fontSize","updateTime","theme"]);
        if(setting){
          setFontSize(JSON.parse(setting[0][1]));
          setUpdateTime(JSON.parse(setting[1][1]));
          setTheme(JSON.parse(setting[2][1]));
          setReady(true)
        }else{
          setFontSize(JSON.stringify(20));
          saveSetting("fontSize",20);
          saveSetting("heading",22);
          saveSetting("title",24);
          saveSetting("small",18);
          setTheme(JSON.stringify("light"));
          saveSetting("theme", "light");
          setUpdateTime(JSON.stringify(900));
          saveSetting("updateTime", 900)
        }
      }catch(error){
        console.log(error);
      }
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


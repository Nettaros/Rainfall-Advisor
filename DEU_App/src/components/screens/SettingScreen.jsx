import React, {useEffect, useState} from 'react'
import {View, Text, Switch} from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import SettingsComponent from '../SettingsComponent';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
//import * as SplashScreen from "expo-splash-screen"
//import { useCallback } from 'react/cjs/react.production.min';

const SettingScreen = () => {
    const [ready, setReady] = useState(false)
    const [fontSize, setFontSize] = React.useState(null);
    const [font, setFont] = React.useState(null);
    const [updateTime, setUpdateTime] = React.useState(null)
    const [fontModalVisible, setFontModalVisible] = React.useState(false);
    const [fontSizeModalVisible, setFontSizeModalVisible] = React.useState(false);
    const [updateTimeModalVisible, setUpdateTimeModalVisible] = React.useState(false);
    const [darkMode, setDarkMode] = useState(false); 
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
        clave: "font",
        title: "Fuente",
        subTitle: font,
        onPress: () => {
          setFontModalVisible(true);
        },
        
      },
      {
        clave: "fontSize",
        title: "Tamaño de letra",
        subTitle: toSize(fontSize),
        onPress: () => {
          setFontSizeModalVisible(true);
        },
      },
      {
        clave: "updateTime",
        title: "Tiempo de actualización",
        subTitle: toMinutes(updateTime),
        onPress: () => {
          setUpdateTimeModalVisible(true);
        },
      }
    ];
  
    const options = {
      font: [
        {
          name: "Arial",
          selected: font === "Arial",
          onPress: () => {
            saveSetting("font", "Arial")
            setFont("Arial")
            setFontModalVisible(false)
          }
        },
        {
          name: "Calibri",
          selected: font === "Calibri",
          onPress: () => {
            saveSetting('font', "Calibri")
            setFont("Calibri")
            setFontModalVisible(false)
          }
        }
      ],
      fontSize: [
        {
          name: "Chica",
          selected: fontSize === 16,
          onPress: () => {
            saveSetting('fontSize', 16)
            setFontSize(16)
            setFontSizeModalVisible(false)
          }
        },
        {
          name: "Mediana",
          selected: fontSize === 20,
          onPress: () => {
            saveSetting("fontSize", 20)
            setFontSize(20)
            setFontSizeModalVisible(false)
          }
          
        },
        {
          name: "Grande",
          selected: fontSize === 24,
          onPress: () => {
            saveSetting("fontSize", 24)
            setFontSize(24)
            setFontSizeModalVisible(false)
          }
        }
      ],
      updateTime: [
        {
          name: "15 minutos",
          selected: updateTime === 900,
          onPress: () => {
            saveSetting("updateTime", 900)
            setUpdateTime(900)
            setUpdateTimeModalVisible(false)
          }
        },
        {
          name: "30 minutos",
          selected: updateTime === 1800,
          onPress: () => {
            saveSetting("updateTime", 1800)
            setUpdateTime(1800)
            setUpdateTimeModalVisible(false)
          }
        },
        {
          name: "45 minutos",
          selected: updateTime === 2700,
          onPress: () => {
            saveSetting("updateTime", 2700)
            setUpdateTime(2700)
            setUpdateTimeModalVisible(false)
          }
        }
      ]
    };
  
    const getSettings = () => {
      AsyncStorage.getItem("font").then(data => {
          if(data){
              setFont(JSON.parse(data));
          }else{
              setFont("Arial")
              const value = JSON.stringify("Arial")
              AsyncStorage.setItem("font", value)
          }
      
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
                setReady(true)
              }).catch((error) => console.log(error));

          }).catch((error) => console.log(error));
    
      }).catch((error) => console.log(error));
    };
    
    return (
      <View>
         
        {!ready 
        ? 
        <View></View>
        : 
        
        <View>

          <Switch value={darkMode} onValueChange={(value) => {
                  setDarkMode(value);
                  EventRegister.emit(
                      "changeTheme", value);
              }}/>
           <SettingsComponent
            modalVisible={
              {
                font: fontModalVisible,
                fontSize: fontSizeModalVisible,
                updateTime: updateTimeModalVisible
              }
            }
            setModalVisible={
              {
                font: setFontModalVisible, 
                fontSize: setFontSizeModalVisible, 
                updateTime: setUpdateTimeModalVisible
              }
            }
            settingsOptions={settingsOptions}
            options={options}
          />
        
        </View>

       
        }  
      </View>

    );
  };


export default SettingScreen;


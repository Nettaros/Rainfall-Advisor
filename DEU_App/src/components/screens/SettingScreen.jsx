import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import SettingsComponent from '../SettingsComponent';
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
    

    useEffect(() => {
      //async function prepare() {
        //try{
          //await SplashScreen.preventAutoHideAsync()
          getSettings()
        //}catch (e){
          //console.warn(e)
        //}finally{
          //setReady(true)
        //}
      //}

      //prepare()
    }, []);

    /*const onLayoutRootView = useCallback(async () => {
      if(ready){
        await SplashScreen.hideAsync()
      }
    }, [ready])*/
    
    const saveSetting = (key, value) => {
      AsyncStorage.setItem(key, value);
    };

    const toMinutes = (seconds) => {
      var min = seconds/60
      return toString(min)+" minutos"
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
        title: 'Fuente',
        subTitle: font,
        onPress: () => {
          setFontModalVisible(true);
        },
        
      },
      {
        clave: "fontSize",
        title: 'Tamaño de letra',
        subTitle: toSize(fontSize),
        onPress: () => {
          setFontSizeModalVisible(true);
        },
      },
      {
        clave: "updateTime",
        title: 'Tiempo de actualización',
        subTitle: toMinutes(updateTime),
        onPress: () => {
          setUpdateTimeModalVisible(true);
        },
      }
    ];
  
    const options = {
      font: [
        {
          name: 'Arial',
          selected: font === "Arial",
          onPress: () => {
            saveSetting('font', 'Arial')
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
              setFont(data);
          }else{
              setFont("Arial")
              const value = JSON.stringify("Arial")
              AsyncStorage.setItem("font", value)
          }
      }).catch((error) => console.log(error));
    

      AsyncStorage.getItem("fontSize").then(data => {
          if(data){
            setFontSize(data);
          }else{
              setFontSize(16)
              const value = JSON.stringify(16)
              AsyncStorage.setItem("fontSize", value)
          }
      }).catch((error) => console.log(error));
    
  
      AsyncStorage.getItem("updateTime").then(data => {
          if(data){
            setFont(updateTime);
          }else{
              setUpdateTime(900)
              const value = JSON.stringify(900)
              AsyncStorage.setItem("updateTime", value)
          }
      }).catch((error) => console.log(error));
    };

    /*if(!ready){
      return null
    }*/
    
    return (
      <View>
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

    );
  };
  

export default SettingScreen
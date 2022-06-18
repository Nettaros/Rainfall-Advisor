import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import SettingsComponent from '../SettingsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingScreen = () => {
    const [fontSize, setFontSize] = React.useState(null);
    const [font, setFont] = React.useState(null);
    const [updateTime, setUpdateTime] = React.useState(null)
    const [fontModalVisible, setFontModalVisible] = React.useState(false);
    const [fontSizeModalVisible, setFontSizeModalVisible] = React.useState(false);
    const [updateTimeModalVisible, setUpdateTimeModalVisible] = React.useState(false);
    
  
    const saveSetting = (key, value) => {
      AsyncStorage.setItem(key, value);
    };
  
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
        subTitle: fontSize,
        onPress: () => {
          setFontSizeModalVisible(true);
        },
      },
      {
        clave: "updateTime",
        title: 'Tiempo de actualización',
        subTitle: updateTime,
        onPress: () => {
          setUpdateTimeModalVisible(true);
        },
      }
    ];
  
    const options = {
      font: [
        {
          name: 'Arial',
          selected: font === "arial",
          onPress: () => {
            saveSetting('font', 'arial')
            setFont("arial")
            setFontModalVisible(false)
          }
        },
        {
          name: "Calibri",
          selected: font === "calibri",
          onPress: () => {
            saveSetting('font', "calibri")
            setFont("calibri")
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
  
    const getSettings = async() => {
      await AsyncStorage.getItem("font").then(data => {
          if(data !== null){
              setFont(data);
          }else{
              setFont("arial")
              const value = JSON.stringify("arial")
              AsyncStorage.setItem("font", value)
          }
      }).catch((error) => console.log(error));
    

      await AsyncStorage.getItem("fontSize").then(data => {
          if(data !== null){
            setFontSize(data);
          }else{
              setFontSize(16)
              const value = JSON.stringify(16)
              AsyncStorage.setItem("fontSize", value)
          }
      }).catch((error) => console.log(error));
    
  
      await AsyncStorage.getItem("updateTime").then(data => {
          if(data !== null){
            setFont(updateTime);
          }else{
              setUpdateTime(900)
              const value = JSON.stringify(900)
              AsyncStorage.setItem("updateTime", value)
          }
      }).catch((error) => console.log(error));
    };

    useEffect(() => {
      getSettings();
    }, []);
  
    return (
      
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

    );
  };
  

export default SettingScreen
import React from 'react'
import {View, Text, ScrollView} from 'react-native'

const SettingsScreen = () => {
    const [fontSize, setFontSize] = React.useState(null);
    const [font, setFont] = React.useState(null);
    const [updateTime, setUpdateTime] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false);
    
  
    const saveSetting = (key, value) => {
      AsyncStorage.setItem(key, value);
    };
  
    const settingsOptions = [
      {
        title: 'Fuente',
        subTitle: font,
        onPress: () => {
          setModalVisible(true);
        },
      },
      {
        title: 'Tamaño de letra',
        subTitle: fontSize,
        onPress: () => {
          setModalVisible(true);
        },
      },
      {
        title: 'Tiempo de actualización',
        subTitle: updateTime,
        onPress: () => {
          setModalVisible(true);
        },
      }
    ];
  
    const prefArr = [
      {
        name: 'First Name',
        selected: sortBy === 'First Name',
  
        onPress: () => {
          saveSetting('sortBy', 'First Name');
          setSortBy('First Name');
          setModalVisible(false);
        },
      },
      {
        name: 'Last Name',
        selected: sortBy === 'Last Name',
        onPress: () => {
          saveSetting('sortBy', 'Last Name');
          setSortBy('Last Name');
          setModalVisible(false);
        },
      },
    ];
  
    const getSettings = async () => {
        await AsyncStorage.getItem("font").then(data => {
            if(data != null){
                setFont(JSON.parse(data));
            }else{
                await AsyncStorage.setItem("font", "arial")
            }
        }).catch((error) => console.log(error));
      

        await AsyncStorage.getItem("fontSize").then(data => {
            if(data != null){
                setFontSize(JSON.parse(data));
            }else{
                await AsyncStorage.setItem("fontSize", 16)
            }
        }).catch((error) => console.log(error));
      
    
        await AsyncStorage.getItem("updateTime").then(data => {
            if(data != null){
                setFont(JSON.parse(updateTime));
            }else{
                await AsyncStorage.setItem("updateTime", 900)
            }
        }).catch((error) => console.log(error));

    };

    useEffect(() => {
      getSettings();
    }, []);
  
    return (
      <SettingsComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        settingsOptions={settingsOptions}
      />
    );
  };
  

export default SettingScreen
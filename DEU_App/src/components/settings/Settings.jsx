import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'

export default function Settings(){
  const [fontSize, setFontSize] = useState(null);
  const [fetchCoolDown, setFetchCoolDown]= useState(null);

  useEffect( ()=>{
    AsyncStorage.getItem("updateTime").then(
     data => {
       if(data){
           const value = JSON.parse(data);
           setFetchCoolDown(value)

       }else{
           setFetchCoolDown(900);
       }
     }
   ).catch((error) => {
     console.log(error);
   })
     AsyncStorage.getItem("fontSize").then(
       data => {
         if(data){
           const value = JSON.parse(data);
           setFontSize(value);
         }else{
          setFontSize(20);
         }
       }
     ).catch((error) => {
       console.log(error);
     })
});
  return({
    fontSize: fontSize,
    fetchCoolDown: fetchCoolDown
  });
}
  /*  
    */

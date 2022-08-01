import React, {useState, useEffect} from 'react';
import { NavigationContainer}  from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import Settings from './src/components/settings/Settings';
import { navigationRef } from './src/navigation/RootNavigation';

export default function App() {
  const theme = Settings().theme;
  return (
        <NavigationContainer theme={theme} ref={navigationRef} >
          <DrawerNavigation/>
        </NavigationContainer> 
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/components/Main.jsx"
import Appbar from "./src/components/AppBar.jsx"
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={['rgba(0, 91, 234,0.9)','rgba(0, 198, 251,0.9)','rgba(0, 91, 234,0.9)']} style={styles.background}
    >
        <Main/>
 
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1
  },
});


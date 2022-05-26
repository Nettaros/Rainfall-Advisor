import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/components/Main.jsx"
import Appbar from "./src/components/AppBar.jsx"

export default function App() {
  return (
      <View style={{backgroundColor: "#1994d4", alignItems: "center" }}> 
        <Appbar/>
        <Main/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

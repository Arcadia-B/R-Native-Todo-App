import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native'; 
import styles from "./styles"
import Input from './Components/Input/Input';


export default function App() {

  return (
    <View style={styles.container}>
      <Input/>
  
      <StatusBar style="auto" />
    </View>
  );
}



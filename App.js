import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, SafeAreaView } from 'react-native'; 
import TodoScreen from './Components/Input/TodoScreen';


export default function App() {

  return (
    <SafeAreaView>
    <View>
      <TodoScreen/>
  
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}



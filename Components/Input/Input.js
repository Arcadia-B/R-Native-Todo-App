import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const Input = () => {
const [todos, addTodos] = useState(null);

const buttonAdd = () =>  {
  addTodos('button pushed');
}
  const buttonDelete = () => {
    addTodos('');
  }


  return (
    <View style={styles.container}>
      <Pressable style={styles.addButton} onPress={buttonAdd}>
      <Text style={styles.addButtonText}>Görev Ekle</Text>
      </Pressable>
      <Pressable style={styles.addButton}>
<Text style={styles.addButtonText} onPress={buttonDelete}>Görev Sil</Text>
</Pressable>
<Text style={styles.result}>{todos}</Text>
     

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton:{
    backgroundColor:'white',
    paddingVertical:20,
    paddingHorizontal:40,
    margin:10,
    borderRadius:20,
   
  },
  addButtonText:{
    color:'green',
    fontSize:18,
  },
  result:{
  color:'gray',
   
  }
  
  
});

export default Input;

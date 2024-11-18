import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const Input = () => {

  


  return (
    <View style={styles.container}>
      <Pressable style={styles.addButton}>

      <Text style={styles.addButtonText}>Görev Ekle</Text>
      </Pressable>
     

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
  
});

export default Input;

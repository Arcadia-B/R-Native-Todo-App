import {FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'




const dummyData = [{
  id:'01',
  title:'Study Hard',
},
{
  id:'02',
  title:'be better',
}]



const TodoScreen = () => {

  const renderTodos = ({item, index}) => {
    return (
      <View style={{backgroundColor:'#856094',
        paddingHorizontal:6,
        paddingVertical:12,
        marginTop:24,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
      }}>
        
        <Text style={{color:'#fff',
          fontWeight:800,
          fontSize:20,
          flex:1,
        }}>{item.title}</Text>
        <IconButton icon='pencil'/>
        <IconButton icon='trash-can'/>
      </View>
    )
  }
  
  return (
    <View style={{marginHorizontal:16,}}>
      <TextInput
      style={{borderWidth:2,
      borderColor:'#1e90ff', 
      borderRadius:6,
      paddingVertical:12,
      marginTop:80,}}
      placeholder='Add A Task'/>

      <Pressable style={{backgroundColor:'#000', 
        borderRadius:6, 
        paddingVertical:12,
        marginTop:24,
        alignItems:'center',}}>
        <Text style={{color:'#fff', 
          fontWeight:'bold',
          fontSize:20,}}>
          Add
        </Text>
      </Pressable>

      <FlatList data={dummyData} renderItem={renderTodos}/>
   
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})
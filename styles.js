import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#095603',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'white',
        fontSize:20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingLeft: 8,
        fontSize: 18,
        borderRadius:20,
        position:'absolute',
        bottom:10,
        textAlign:'center',
        
      },
  });
  
  export default styles;
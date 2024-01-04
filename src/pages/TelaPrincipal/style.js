import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container:{
    flex:1,
      backgroundColor: '#6495ed',
      alignItems: 'center',
      justifyContent: 'center'
  }, 
  
    button:{
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',       
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'lightgrey'
    }, 
    viewDados:{
      marginBottom:80,
      marginTop: 50,
      backgroundColor: 'lightblue',
      width: '100%',
           
    },
    textDados:{
      marginLeft: 8,
      height: 30,
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop:5
    },
    buttonfacilit:{
      backgroundColor: 'green',
      width: 70,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent:'center',
      paddingVertical: 3,
      marginRight: 4
      
    },
    listItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingTop: 10,
    
    }
  
});

export default styles
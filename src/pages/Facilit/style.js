import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#6495ed',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      flexWrap:'wrap',
      gap:7,
      paddingTop:50,
      paddingLeft: 3
      
      
  }, 

  square: {
      backgroundColor: 'green',
      width: '48%',
      aspectRatio:1,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent:'center',
      marginRight: '1%',
      marginTop:10
}
})
export default styles;
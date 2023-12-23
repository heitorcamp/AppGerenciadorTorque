import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer} from '@react-navigation/native'
import Routes from "./src/routes"



export default function App(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="green" barStyle="light-content"/>
      <Routes/>

      
    </NavigationContainer>
  );
}




/*export default function App(){
  return(
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={require("./src/assets/hyundai_logo.png")}>  
      </Image>
      <Text style={styles.title}> Tela de login </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "blue",
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto'
      
    },
    title:{
      color: 'red'
    }
    
    
})*/
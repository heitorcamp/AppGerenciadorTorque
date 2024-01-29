import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, Alert} from 'react-native';

import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';



export default function TelaLogin() {
  const navigation = useNavigation();
  const [hmc, setHmc] = useState("");
  
  const handleAcessar = () => {
    // Passa o valor do HMC para a próxima tela
    if(hmc.trim() !== ""){
      navigation.navigate('TelaPrincipal', { hmcValue: hmc });
    } else{
      Alert.alert("Digite um HMC válido");
    }
    
  };

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>  
        
          <Animatable.Image
          //animation="flipInY"
          source={require('../../assets/hyundai_logo.png')}
          style={{width: '100%'}}
          resizeMode='contain'
          />
          <Text style={styles.title}> Gerenciador de Torque </Text>        
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerForm}>
        <Animatable.View 
        delay={600} animation="fadeInUp" 
        style={styles.containerForm}>
          
          <Text >Entre com seu HMC para acessar</Text>
          <TextInput 
          placeholder='Digite seu HMC...'
          style={styles.input}
          keyboardType='numeric'
          value={hmc}
          onChangeText={(valor) => setHmc(valor)}

          ></TextInput>


          <TouchableOpacity 
          style={styles.button}
          onPress={handleAcessar}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Acessar</Text>
          </TouchableOpacity>

        </Animatable.View>
        </KeyboardAvoidingView>
      </View>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#6495ed'
  },
  containerLogo:{
      flex:2,
      //backgroundColor: 'red'
      justifyContent: 'center',
      alignItems: 'center'
  },
  title:{
      fontWeight: 'bold',
      fontSize: 25
    
  },
   button:{
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 8,
    width: '70%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
   },
   containerForm:{
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
   },
   input:{
    backgroundColor: '#dcdcdc',
    borderBottomWidth: 2,
    height: 40,
    marginBottom: 12,
    fontSize: 16, 
    paddingTop: 2,
    bottom: '-15%'
    
   }
})
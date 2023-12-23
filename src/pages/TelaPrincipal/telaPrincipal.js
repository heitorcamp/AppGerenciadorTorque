import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function TelasPrincipal() {
  return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title} id='textCenter'>Não foi feita leitura de QRcode hoje</Text>
        </View>

    <TouchableOpacity style={styles.button}>
      <Text>Scanear QRcode</Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
      backgroundColor: '#6495ed',
      alignItems: 'center',
      justifyContent: 'center'
  }, 
  title:{
    
    
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
    }
})
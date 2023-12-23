import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Scanner from '../LeitorQr/leitorQrcode';

export default function TelasPrincipal() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  return(
      <View style={styles.container}>
        <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'>
          <View style={styles.modal}>
            <Scanner/>
            <TouchableOpacity style={styles.button} title="Cancelar" onPress={() => setModalVisible(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>


        <View>
          <Text style={styles.title} id='textCenter'>Não foi feita leitura de QRcode hoje</Text>
        </View>

    <TouchableOpacity style={styles.button}
    onPress={() => setModalVisible(true)}>
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

    }
})
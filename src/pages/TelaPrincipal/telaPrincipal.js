import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Scanner from '../LeitorQr/leitorQrcode';
import styles from './style';
import Facilit from '../Facilit';
import TelaLogin from '../Login';


export default function TelasPrincipal() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");
  const [qrLidos, setQrLidos] = useState([]);

  
  
  const qrScaneado = (type, data) => {
    setType(type);
    setData(data);
    setModalVisible(false);
    setQrLidos((arr) => [...arr,{id: new Date().getTime(), data}]) 
   }

   const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.textDados}>Dados: {item.data}     ----- </Text>

      <TouchableOpacity style={styles.buttonfacilit}
      onPress={()=> navigation.navigate('Facilit')}>

        <Text style={{fontWeight: 'bold'}}>Facilit</Text>
      </TouchableOpacity>
    </View>
  );
  return(
      <View style={styles.container}>
        
        
            <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'>
              
              <View style={styles.modal}>
                <Scanner onCodeScaned={qrScaneado}/>
                
                <TouchableOpacity style={styles.button} title="Cancelar" onPress={() => setModalVisible(false) } >
                  <Text>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          <FlatList style={styles.viewDados} 
              data={qrLidos.reverse()}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id}
            />   
                    
            
        <TouchableOpacity style={styles.button}
        onPress={() => setModalVisible(true)}>
          <Text>Scanear QRcode</Text>
          </TouchableOpacity>
      </View>
  )
}


import { Modal, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-animatable";
import styles from "./style";
import { useState } from "react";


const Square = ({value, onPress})=> {
  return(
  <TouchableOpacity style={styles.square} onPress={onPress}>
    <Text style={{fontWeight:'bold'}}>{value}</Text>
  </TouchableOpacity>
)}

export default function Facilit() {
  const [valores, setValores] = useState('');
  const [viewModal, setViewModal] = useState(false);

  const itensProcesso = (value)=> {
  
    if(value === '01 LH'){
      setValores('deu certo 01 lh');

    }else if (value === '01 RH'){
      setValores('deu certo 01 rh');
      
    }
    setViewModal(true);
  };
  const closeModal = () => {
    setViewModal(false);
  };
return(
<ScrollView>
  <View style={styles.container}>
      <Square value={'01 LH'} onPress={()=> itensProcesso('01 LH')}/>
      <Square value={'01 RH'} onPress={()=> itensProcesso('01 RH')}/>
      <Square value={'02 LH'} onPress={()=> itensProcesso('02 LH')}/>
      <Square value={'02 RH'} onPress={()=> itensProcesso('02 RH')}/>
      <Square value={'03 LH'} onPress={()=> itensProcesso('03 LH')}/>
      <Square value={'03 RH'} onPress={()=> itensProcesso('03 RH')}/>
      <Square value={'04 LH'} onPress={()=> itensProcesso('04 LH')}/>
      <Square value={'04 RH'} onPress={()=> itensProcesso('04 RH')}/>
      <Square value={'05 LH'} onPress={()=> itensProcesso('05 LH')}/>
      <Square value={'05 RH'} onPress={()=> itensProcesso('05 RH')}/>
      <Square value={'06 LH'} onPress={()=> itensProcesso('06 LH')}/>
      <Square value={'06 RH'} onPress={()=> itensProcesso('06 RH')}/>
  </View> 
  <Modal visible={viewModal} 
  transparent={true}
  animationType='slide'>
    <View style={styles.modal}>
      <Text>{valores}</Text>
      <TouchableOpacity onPress={closeModal}>
            <Text>Fechar Modal</Text>
          </TouchableOpacity>
    </View>
  </Modal>


</ScrollView>
)



}
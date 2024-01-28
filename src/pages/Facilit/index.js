import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-animatable";
import styles from "./style";

function Square({value}){
  return(<TouchableOpacity style={styles.square}>
    <Text>{value}</Text>
  </TouchableOpacity>
)}

export default function Facilit() {
return(
<ScrollView>
  <View style={styles.container}>
      <Square value={'01 LH'}/>
      <Square value={'01 RH'}/>
      <Square value={'02 LH'}/>
      <Square value={'02 RH'}/>
      <Square value={'03 LH'}/>
      <Square value={'03 RH'}/>
      <Square value={'04 LH'}/>
      <Square value={'04 RH'}/>
      <Square value={'05 LH'}/>
      <Square value={'05 RH'}/>
      <Square value={'06 LH'}/>
      <Square value={'06 RH'}/>
  </View> 


</ScrollView>
)



}
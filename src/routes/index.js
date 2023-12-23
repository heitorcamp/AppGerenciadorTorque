import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../pages/Login';
import TelaPrincipal from "../pages/TelaPrincipal/telaPrincipal";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}/>
         
          <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{headerShown: false}}
          />
      
    </Stack.Navigator>
    )
}
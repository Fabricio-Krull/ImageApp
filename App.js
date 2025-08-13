import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Perfil"}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Perfil" component={LoginScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
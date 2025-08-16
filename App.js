import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen.js';
import AuthScreen from './src/screens/AuthScreen.js';
import SignUp from './src/screens/SignUpScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"SignUp"}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Auth" component={AuthScreen}  />
          <Stack.Screen name="SignUp" component={SignUp}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
/////////////////////////////////////////////// ALL IMPORTED SCREENS ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ingredients from './Product/Ingredients.js';
import HomeScreen from './screens/Homescreen';
import editprofileScreen from './screens/Editprofile';
import FscannerScreen from './screens/Foodscanner';
import AinputScreen from './screens/Ainput';
import ForumScreen from './screens/Forum'
import SettingsScreen from './screens/Settings';
import Login from './screens/Login';
import WelcomeScreen from './screens/WelcomeScreen';
import Register from './screens/Register';

// const initialising the stack navigator
const Stack = createStackNavigator();

// my stack function
function MyStack() {
  // return stack render
  return (
    // stack navigator compiling all imported screens
    <Stack.Navigator>
      {/* welcome screen */}
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
      {/* register screen */}
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      {/* login screen */}
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      {/* homescreen */}
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}  />
      {/* edit profile screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Edit Profile" component={editprofileScreen} />
      {/* Food scanner screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Food Scanner" component={FscannerScreen} />
      {/* allergy input screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Allergy Input" component={AinputScreen} />
      {/* forum screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Forum/Chat" component={ForumScreen} />
      {/* settings screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Settings" component={SettingsScreen} />
      {/* ingredients screen */}
      <Stack.Screen options={{headerStyle: { backgroundColor: '#000000'}, headerTitleStyle: {color: 'white'}, headerTintColor: "#FFFFFF" }} name="Ingredients" component={Ingredients} />
    </Stack.Navigator>
  );
}

// DEFAULT APP EXPORT (DISPLAYS THE ENTIRE APP ON SCREEN) 
export default function App() {
  // return render my stack navigation
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


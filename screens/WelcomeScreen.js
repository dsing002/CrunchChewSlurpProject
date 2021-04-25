// ///////////////////////////////////////////////////////ALL IMPORTED DEPENDANCIES////////////////////////////////////////////////////////////////////
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

// wlecome screen function
 function WelcomeScreen({ navigation }) {
  //  return page render
  return (
    // container view
    <View style={styles.container}>
      {/* background logo */}
      <Image source={require("../assets/images/splash.png")} style={{width: '100%', height: "100%", position: "absolute"}}/>

      {/* register navigation button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
      <Text style={styles.buttonText}> Register</Text>
    </TouchableOpacity>
    
    {/* Login navigation button */}
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}> Login</Text>
    </TouchableOpacity>
    </View>

  );
}

// export function, to be imported into app.js
export default WelcomeScreen;

// styling for page ocntent
const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#000000"
  },
// button styling
  button: {
    backgroundColor: "#000000", 
    height: 40, 
    width: 200, 
    borderRadius: 20, 
    margin: 20,
    marginBottom: 0,
    bottom: 260
  },
// button text styling
  buttonText: {
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    fontStyle: 'italic'
  },
  
});


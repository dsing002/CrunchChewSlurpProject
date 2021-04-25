/////////////////////////////////////////////// ALL IMPOrTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
 } from 'react-native';
import Checkbox from 'expo-checkbox';

//  allergy input page function
function AinputScreen({ navigation }) {

  // const variables intialised for checkboxes
  // egg
    const [isEgg, setEgg] = useState(false);
    // fish
    const [isFish, setFish] = useState(false);
    // celery
    const [isCelery, setCelery] = useState(false);
    // gluten
    const [isGluten, setGluten] = useState(false);
    // milk
    const [isMilk, setMilk] = useState(false);
    // nuts
    const [isNuts, setNuts] = useState(false);
    // soya
    const [isSoya, setSoya] = useState(false);
    // crustaceans
    const [isCrustaceans, setCrustaceans] = useState(false);
    // sesame
    const [isSesame, setSesame] = useState(false);
    // sulphates
    const [isSulphates, setSulphates] = useState(false);
    
    // returns render 
    return (
      // initial view container holding all page content
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* background image */}
        <Image source={require("../assets/images/background.png")} style={{width: '100%', height: "100%"}}/>

        {/* Second view holding input form blocks */}
        <View style={{position: "absolute", height: "100%", width: "100%", alignItems: "center"}}>

          {/* input text title */}
          <Text style={{fontWeight: "bold", fontSize: 19, textAlign: "center", margin: 25, marginLeft: 40, marginRight: 40}}>
            Please complete the following allergy form, so that the system can look out for these allergies when scanning</Text>
         
         {/* First input block text and text input */}
        <Text style={{fontWeight: "bold",fontSize: 16, marginBottom: -10,}}>1. Please list all known allergies here:</Text>
        <TextInput placeholder='Please Enter Here...' placeholderTextColor = 'gray' style={styles.aInput}></TextInput>
  
   {/* Second input block text and text input, in a scrollable View */}
        <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: -10, marginLeft:40, marginRight: 40}}>
          2. Please Tick the allergies that apply to you:</Text>
  <ScrollView style={styles.aInput2}>

    {/* Egg checkbox */}
        <Checkbox style={styles.checkbox} value={isEgg} onValueChange={setEgg} color={isEgg ? '#ffa500' : undefined} />
        <Text style={{position: "absolute", marginLeft: 70, marginTop:5}}>Eggs</Text>
      {/* Fish checkbox */}
              <Checkbox style={styles.checkbox} value={isFish} onValueChange={setFish} color={isFish ? '#ffa500' : undefined}/>
              <Text style={{position: "absolute", marginLeft: 70, marginTop:37}}>Fish</Text>
          {/* Celery checkbox */}
                  <Checkbox style={styles.checkbox} value={isCelery} onValueChange={setCelery} color={isCelery ? '#ffa500' : undefined}/>
                  <Text style={{position: "absolute", marginLeft: 70, marginTop:69}}>Celery</Text>
              {/* Gluten checkbox */}
                      <Checkbox style={styles.checkbox} value={isGluten} onValueChange={setGluten} color={isGluten ? '#ffa500' : undefined}/>
                      <Text style={{position: "absolute", marginLeft: 70, marginTop:101}}>Gluten</Text>
                  {/* Milk checkbox */}
                          <Checkbox style={styles.checkbox} value={isMilk} onValueChange={setMilk} color={isMilk ? '#ffa500' : undefined}/>
                          <Text style={{position: "absolute", marginLeft: 70, marginTop:133}}>Milk</Text>
                      {/* Nuts checkbox */}
                              <Checkbox style={styles.checkbox} value={isNuts} onValueChange={setNuts} color={isNuts ? '#ffa500' : undefined}/>
                              <Text style={{position: "absolute", marginLeft: 70, marginTop:165}}>Nuts</Text>
                          {/* Soya checkbox */}
                                  <Checkbox style={styles.checkbox} value={isSoya} onValueChange={setSoya} color={isSoya ? '#ffa500' : undefined}/>
                                  <Text style={{position: "absolute", marginLeft: 70, marginTop:197}}>Soya</Text>
                              {/* Crustaceans checkbox */}
                                      <Checkbox style={styles.checkbox} value={isCrustaceans} onValueChange={setCrustaceans} color={isCrustaceans ? '#ffa500' : undefined}/>
                                      <Text style={{position: "absolute", marginLeft: 70, marginTop:229}}>Crustaceans</Text>
                                  {/* Sesame checkbox */}
                                          <Checkbox style={styles.checkbox} value={isSesame} onValueChange={setSesame} color={isSoya ? '#ffa500' : undefined}/>
                                          <Text style={{position: "absolute", marginLeft: 70, marginTop:261}}>Sesame</Text>
                                      {/* Egg checkbox */}
                                              <Checkbox style={styles.checkbox} value={isSulphates} onValueChange={setSulphates} color={isSulphates ? '#ffa500' : undefined}/>
                                              <Text style={{position: "absolute", marginLeft: 70, marginTop:293}}>Sulphates</Text>
                                              </ScrollView>
            
         {/* Third input block text and text input */}
        <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: -10, marginLeft:55, marginRight: 55}}>3. Are there any other allergies not listed, that you would like to add:</Text>
        <TextInput placeholder='Please Enter Here...' placeholderTextColor = 'gray' style={styles.aInput}></TextInput>
  
  {/* Confirm button and text */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: "#000000", height: 40, width: 180, borderRadius: 20, margin: 20}}>
          <Text style={{color: '#FFFFFF', textAlign: "center", fontWeight: "bold", padding: 10}}>Confirm</Text>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
// page export to be imported into app.js
  export default AinputScreen;

  /////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000"
    },
  
    // first and third input block styling
  aInput: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 80,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    textAlign: "center"
    
  },
  // second inout block styling
  aInput2: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 120,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    textAlign: "center"
    
  },
  // checkbox styling
  checkbox: {
   marginLeft:30
  },
  
  });
  
  
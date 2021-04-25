/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  TouchableOpacity, 
 } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


// Edit profile page function
function editprofileScreen({ navigation }) {
  
  // const initialising the image and setimage variable as null
    const [image, setImage] = useState(null);
  
    // use feffect syncs the platform with the devices media storage permission
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          // if status does not equal granted then an alert pops up
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    // Const initialising the pickimage variable to async storage
    const pickImage = async () => {
      // awaits user to pick an image
      let result = await ImagePicker.launchImageLibraryAsync({
        // allows user to then edit the image
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        // set aspect ratio
        aspect: [4, 3],
        // to quality 1
        quality: 1,
      });
  
      console.log(result);
  // if user does not cancel the edit, then the image is set
      if (!result.cancelled) {
        // Corrupt async module prevents storage of image
        setImage(result.uri);
      }
    };
  // returns page render
    return (
      // initial view container
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* background image */}
        <Image source={require("../assets/images/background.png")} style={{width: '100%', height: "100%", position: "absolute"}}/>
      
      {/* second view container for profile image */}
      <View style={{backgroundColor: "#FFFFFF", width: 140, height: 140, borderRadius: 100, top: 0}}>
        {/* image variable is sourced from the image chosen during the pick image phase */}
      {image && <Image source={{ uri: image }} 
      style={{width: 140, height: 140, borderRadius: 100, backgroundColor: '#FFFFFF', alignItems: 'center' }} />} 
      </View>
      {/* button allows user to pick an image (and request storage access) */}
      <TouchableOpacity onPress={pickImage} >
          <Text style={{fontWeight: "bold", fontSize: 18, textAlign: "center", marginTop: 10}}>Edit Image</Text>
        </TouchableOpacity>
  
  {/* Text input for the remaining data fields */}
        <TextInput placeholder='Name' placeholderTextColor = 'gray' style={styles.epInput}></TextInput>
        <TextInput placeholder='Allergies' placeholderTextColor = 'gray' style={styles.epInput}></TextInput>
        <TextInput placeholder='Hobbies' placeholderTextColor = 'gray' style={styles.epInput}></TextInput>
        <TextInput placeholder='About Me' placeholderTextColor = 'gray' style={styles.epInput2}></TextInput>
  
  {/* button and text to confirm and return home */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} 
        style={{backgroundColor: "#000000", height: 40, width: 180, borderRadius: 20, margin: 20}}>
          <Text style={{color: '#FFFFFF', textAlign: "center", fontWeight: "bold", padding: 10}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
// export page to be imported into app.js
  export default editprofileScreen;

  /////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000"
    },
  
// first three input blocks styling
  epInput: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    textAlign: "center"
    
  },
  
  // fourth input block styling
  epInput2: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 100,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    textAlign: "center",
    
  },
  
  });
  
  
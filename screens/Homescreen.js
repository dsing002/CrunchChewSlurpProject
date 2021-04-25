/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  ImageBackground,
  TouchableOpacity,
 } from 'react-native';


// home page function
function HomeScreen({ navigation }) {
  
  // reutnr page render
    return (
      // initial view container
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  {/* home background images and logo */}
  <Image style={styles.image1} source={require("../assets/images/Home-Background2.png")} />
      <Image style={styles.image2} source={require("../assets/images/Home-Background.png")} />
      <Image style={styles.image3} source={require("../assets/images/Logo-dimmed.png")} />
  
  {/* second view container food scanner button */}
  <View  style={styles.fscanButton}>
      <TouchableOpacity
      // navigate to food scanner page
          onPress={() => navigation.navigate('Food Scanner')}>
            {/* icon image */}
            <Image style={{left: "25%", top: 15}} source={require("../assets/images/foodscannerIcon.png")} />
            {/* text */}
            <Text style={{color: '#FFFFFF', fontWeight: "bold", fontSize: 15, textAlign: "center", paddingTop:30 }}>Food Scanner</Text>
          </TouchableOpacity>
          </View>
  
  {/* Third view container allergy input button */}
          <View  style={styles.ainputButton}>
      <TouchableOpacity
      // navigate to allergy input page
          onPress={() => navigation.navigate('Allergy Input')}>
            {/* icon image */}
            <Image style={{left: "25%", top: 5}} source={require("../assets/images/ainputIcon.png")} />
            {/* text */}
            <Text style={{color: '#FFFFFF', fontWeight: "bold", fontSize: 15, textAlign: "center", paddingTop: 5 }}>Allergy Input</Text>
          </TouchableOpacity>
          </View>
  
  {/* fourth view container forum button */}
          <View  style={styles.forumButton}>
      <TouchableOpacity
      // navigate to forum page
          onPress={() => navigation.navigate('Forum/Chat')}>
            {/* icon image */}
            <Image style={{left: "25%", top: 15}} source={require("../assets/images/forumIcon.png")} />
            {/* text */}
            <Text style={{color: '#FFFFFF', fontWeight: "bold", fontSize: 15, textAlign: "center", paddingTop:15 }}>Forum/Chat</Text>
          </TouchableOpacity>
          </View>
  
  {/* fifth view container, setting button */}
          <View  style={styles.settingButton}>
      <TouchableOpacity
      // navigate to settings page
          onPress={() => navigation.navigate('Settings')}>
            {/* icon image */}
            <Image style={{left: "25%", top: 15}} source={require("../assets/images/settingsIcon.png")} />
            {/* text */}
            <Text style={{color: '#FFFFFF', fontWeight: "bold", fontSize: 15, textAlign: "center", paddingTop:20 }}>Settings</Text>
          </TouchableOpacity>
          </View>
  
  {/* recent items image background */}
      <ImageBackground source={require("../assets/images/recentItems.png")} style={{width: '100%', height: 150, position: "absolute", top: 330 }}>
        {/* sixth view container with text */}
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', padding: 20}}>
       <Text style={{color: '#FFFFFF', fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Check out your latest scanned items!</Text>
     </View>
      </ImageBackground>
  
  {/* profile image at the top screen */}
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        {/* button navigate to edit profile */}
      <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Edit Profile')}>
        <Image style={{alignContent: "center", height: "100%", width: "100%"}} source={require("../assets/images/profile-temp.png")} />
        </TouchableOpacity>
        {/* text */}
        <Text style={styles.profile}>Welcome!</Text>
        </View>
  
      </View>
    );
  }
// export page to import in app.js
  export default HomeScreen;

  /////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000"
    },
  // image stlyling
    image1: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%"
    },
 
    image2: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "40%"
    },
  
    image3: {
      position: "absolute",
      top: -20,
      width: "100%",
    },
  
  // Homepage profile icon and text styling
    profileIcon: {
      top: -420,
      width: 120,
      height: 120,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',
    },
  
    // profile text
    profile: {
      fontWeight: "bold",
      top: -405
    },
  
    // Hompage navigation buttons styling
    // scanner button
    fscanButton: {
      backgroundColor: "#000000",
      top: 410,
      right: "23%",
      height: 120,
      width: 120,
      borderRadius: 20
    },
  
    // allergy input button
    ainputButton: {
      backgroundColor: "#000000",
      top: 290,
      left: "23%",
      height: 120,
      width: 120,
      borderRadius: 20
    },
  
    // forum button
    forumButton: {
      backgroundColor: "#000000",
      top: 310,
      right: "23%",
      height: 120,
      width: 120,
      borderRadius: 20
    },
  
    // settings button
    settingButton: {
      backgroundColor: "#000000",
      top: 190,
      left: "23%",
      height: 120,
      width: 120,
      borderRadius: 20
    },
  
  });
  
  
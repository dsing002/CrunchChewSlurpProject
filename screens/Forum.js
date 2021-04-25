/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput
 } from 'react-native';


// forum page function
function ForumScreen({ navigation }) {

    return (
      // initial view container
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        {/* background image */}
        <Image source={require("../assets/images/background.png")} style={{width: '100%', height: "100%"}}/>

        {/* View container for search bar */}
        <View style={styles.searchbar}>
          {/* Sarchbar text input */}
        <TextInput placeholder='Search for content' placeholderTextColor = 'gray' style={{paddingTop: 10, paddingLeft:20,}} ></TextInput>
         </View>
         {/* search icon and styling */}
         <Image source={require("../assets/images/searchIcon.png")} style={{width: 20, height: 20, position: 'absolute', top: 41, left: 290}}/>
         
         {/* Scrollable bar view ccontainer */}
         <View style={{backgroundColor: "#000000", height: 80, width: "100%", position: "absolute", top: 100}}>
        <ScrollView horizontal={true}>

        {/* Button 1 */}
        <TouchableOpacity  style={styles.filter}>         
          <Text style={styles.text}>Restaurants</Text>
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity  style={styles.filter2}>
          <Text style={styles.text}>Recipes</Text>
        </TouchableOpacity>

        {/* Button 3 */}
        <TouchableOpacity  style={styles.filter3}>
          <Text style={styles.text}>Poor Labelling</Text>
        </TouchableOpacity>

        {/* Button 4 */}
        <TouchableOpacity  style={styles.filter4}>
          <Text style={styles.text}>Soya Free Stores</Text>
        </TouchableOpacity>
    
          </ScrollView>
          </View>

          {/* View container for messages and chats */}
          <View style={{height: "75%", width: "100%", position: "absolute", top: 180}}> 
          {/* scrollview vertical */}
          <ScrollView>

          {/* View Container post 1 */}
            <View style={styles.block}>
              {/* Profile icon */}
            <Image source={require("../assets/images/profile1.png")} style={{width: 50, height: 50, marginLeft: 20, marginTop: 10, position: "absolute"}}/>
            {/* Text */}
            <Text style={{color: "#FFFFFF", fontWeight: "bold", margin: 10, marginLeft: 90}}>Any reccomendation for allergy frendly recipes</Text>
            <Text style={{color: "gray", marginLeft: 90, marginTop: 20}}>200 replies</Text>
            {/* button and button text */}
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.text1}>View</Text>
            </TouchableOpacity>
            </View>

              {/* View Container Post 2 */}
              <View style={styles.block}>
                {/* profile icon */}
              <Image source={require("../assets/images/profile2.png")} style={{width: 50, height: 50, marginLeft: 20, marginTop: 10, position: "absolute"}}/>
              {/* text */}
              <Text style={{color: "#FFFFFF", fontWeight: "bold", margin: 10, marginLeft: 90}}>Starbucks has the worst labelling, agree?</Text>
              <Text style={{color: "gray", marginLeft: 90, marginTop: 20}}>80 replies</Text>
              {/* button and button text */}
              <TouchableOpacity  style={styles.button}>
                <Text style={styles.text1}>View</Text>
              </TouchableOpacity>
              </View>

                {/* View Container chat 3 */}
                <View style={styles.block}>
                  {/* profile icon */}
                <Image source={require("../assets/images/profile3.png")} style={{width: 50, height: 50, marginLeft: 20, marginTop: 10, position: "absolute"}}/>
                {/* text */}
                <Text style={{color: "#FFFFFF", fontWeight: "bold", margin: 10, marginLeft: 90}}>Jaspreet kaur </Text>
                <Text style={{color: "gray", marginLeft: 90}}>Nut Allergy Sufferer</Text>
                {/* button and button text */}
                <TouchableOpacity  style={styles.button1}>
                  <Text style={styles.text1}>Chat</Text>
                </TouchableOpacity>
                </View>

                  {/* View Container chat 4 */}
                  <View style={styles.block}>
                    {/* profile icon */}
                  <Image source={require("../assets/images/profile4.png")} style={{width: 50, height: 50, marginLeft: 20, marginTop: 10, position: "absolute"}}/>
                  {/* text */}
                  <Text style={{color: "#FFFFFF", fontWeight: "bold", margin: 10, marginLeft: 90}}>Michael smith</Text>
                  <Text style={{color: "gray", marginLeft: 90}}>Soya and Fish allergy</Text>
                  {/* button and button text */}
                  <TouchableOpacity  style={styles.button1}>
                    <Text style={styles.text1}>Chat</Text>
                  </TouchableOpacity>
                  </View>

                    {/* View Container Post 5 */}
                    <View style={styles.block}>
                      {/* profile icon */}
                    <Image source={require("../assets/images/profile-temp.png")} style={{width: 50, height: 50, marginLeft: 20, marginTop: 10, position: "absolute"}}/>
                    {/* text */}
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", margin: 10, marginLeft: 90}}>Need help with scanning!</Text>
                    <Text style={{color: "gray", marginLeft: 90, marginTop: 35}}>200 replies</Text>
                    {/* button and button text */}
                    <TouchableOpacity  style={styles.button}>
                      <Text style={styles.text1}>View</Text>
                    </TouchableOpacity>
                    </View>

          </ScrollView>
          </View>

      </View>
    );
  }
// export page to be imported into app.js
  export default ForumScreen;

/////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000"
    },
// Saercbar styling
    searchbar:{
      backgroundColor: "#FFFFFF",
      position: "absolute",
      top: 5,
      height: 50,
      width: "85%",
      borderRadius: 60,
      margin: 20
    },
// filter buttons styling
    filter: {
      backgroundColor: "#FF8F58", 
      height: 40, 
      width: 150, 
      borderRadius: 20, 
      margin: 20,
      marginLeft: 0
    },

    filter2: {
      backgroundColor: "#FF8F58", 
      height: 40, 
      width: 150, 
      borderRadius: 20, 
      margin: 20,
      marginLeft: 0
    },

    filter3: {
      backgroundColor: "#FF8F58", 
      height: 40, 
      width: 150, 
      borderRadius: 20, 
      margin: 20,
      marginLeft: 0
    },

    filter4: {
      backgroundColor: "#FF8F58", 
      height: 40, 
      width: 150, 
      borderRadius: 20, 
      margin: 20,
      marginLeft: 0
    },
    
  // Text styling
    text: {
      color: '#FFFFFF', 
      textAlign: "center", 
      fontWeight: "bold", 
      padding: 10
    },

    text1: {
      color: '#FFFFFF', 
      textAlign: "center", 
      fontWeight: "bold", 
      padding: 5
    },

    // chat and post blocks styling
    block:{
      backgroundColor: "#000000",
      opacity: 0.9,
      height: 120,
      margin: 25,
      marginBottom: 5,
      borderRadius: 20,
    },

    // chat and post block buttons styling
    button: {
      backgroundColor: "#FF8F58", 
      height: 30, 
      width: 90, 
      borderRadius: 20, 
      marginTop: -20,
      marginLeft: 200
    },

    button1: {
      backgroundColor: "#FF8F58", 
      height: 30, 
      width: 90, 
      borderRadius: 20, 
      marginTop: 15,
      marginLeft: 200
    },

  });
  
  
/////////////////////////////////////////////// ALL IMPOrTED DEPENDENCIES ////////////////////////////////////////////////////////////////////
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView 
} from 'react-native';

///////////////////////////////////////////////////////////////////////////////
///// Modified code taken from Omar Atari's EasyScan project and modified, //// 
//////// which can be found here https://github.com/OmarATARI/EasyScan ////////
///////////////////////////////////////////////////////////////////////////////

// Ingredients list page
function Ingredients({ route }) {

  //const variable initialising the ingredients text and getting it from the scanner via 'item'
  const { ingredients_text } = route.params.item;
  // returns the render
    return (

      // view containing page content
    <View style={styles.container}>
      {/* background image */}
      <Image source={require("../assets/images/IngredientBackground.jpg")} 
      style={{width: '100%', height: "100%", position: "absolute", opacity: 0.8}}/>
      {/* View holding the text and scrollbar info */}
      <View style={styles.background}>
      {/* Title */}
      <Text style={styles.text1}>The Following Items Have Been Identified:</Text>
      {/* Scrollable box depending on amount of text returned */}
      <ScrollView>
        {/* text will be outputted from the scanner, but if there is no data, then returns'N/A */}
            <Text style={styles.text2}> { ingredients_text? ingredients_text : 'N/A' }</Text>
            </ScrollView>
            </View>
        </View>
    );
  }
// Exports the function to be imported in app.js
  export default Ingredients;

  // Styling fo the page
  const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
// Text 1 styling
    text1: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      color: "#FFFFFF",
      padding: 20
    },
// Text 2 styling
    text2: {
      fontSize: 15,
      textAlign: "center",
      padding: 20,
      color: "#FFFFFF"
     
    },
// background image styling
    background: {
      backgroundColor: "#000000",
      padding: 10,
      borderRadius: 20,
      height:"60%",
      width: "90%"
      
    }
  
  });
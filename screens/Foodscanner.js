/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES //////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Vibration,
 } from 'react-native';
import { BarCodeScanner} from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {insertProduct} from '../utils/databse';
import { TouchableOpacity } from 'react-native-gesture-handler';

///////////////////////////////////////////////////////////////////////////////
///// Modified code taken from Omar Atari's EasyScan project and modified, ////
/////// which can be found here https://github.com/OmarATARI/EasyScan /////////
///////////////////////////////////////////////////////////////////////////////

// food scanner page function
function FscannerScreen({ navigation }) {

  // const variable initialising the variables for camera permission
  const [receivedPermission, setReceivedPermission] = useState(null);
  // const variables initialising the variable to scanning and scanned 
  const [scanned, setScanned] = useState(false);

  // use effect awaits for camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // once accepted receivedpermission is set to Granted
      setReceivedPermission(status === 'granted');
    })();
  }, []);

  // const initialising saveproduct into the database variable
  const saveProduct = async (id_product, api_res) => {
    // tries to insert product and data into database
    try {
      insertProduct(id_product, true, false)
      storeData(api_res.product._id, JSON.stringify(api_res.product))
      // catches any error
    } catch (error) {
      // and outputs error on screen
      console.error(`error saving the product in history: ${error}`)
    }
  };

  // const initialising store data variable into the database
  const storeData = async (key, value) => {
    // try storing data into database
    try {
      await AsyncStorage.setItem(key, value);
      // catches any error
    } catch (error) {
      // outputs error message on screen
      console.error(`error saving the product in history: ${error}`)
    }
  };

  // const vairable initialising once a barcode has been scanned
  const handleBarCodeScanned = ({ _, data }) => {
    // set scanned is set to true
    setScanned(true);
    // vibration occurs for physical confirmation to user
    Vibration.vibrate()

    // fetching DATA from the openfoodfacts api database
    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    // the response is converted into .json format
      .then((response) => response.json())
      .then((json) => {
        // if the json text cant be found in the database output product not found
        if (json.status_verbose === 'product found'){
          // otherwise save the porduct
          saveProduct(json.product._id, json)
          // navigate to ingredients page
          navigation.navigate('Ingredients',
          {
            // where the text will retrieve the data from 'item'
            item: json.product
          })
        }
        // otherwise alert product not found
        else alert('Product not found')

      })
      // catch and display error on screen
      .catch((error) => {
        console.error(error);
      });
  };

  // if permission is equal to null then display following text
  if (receivedPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  // if permission to equal to false then display following text
  if (receivedPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // if successful, then returns page render
  return (
    // intial view and styling
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: "#000000"
      }}>
        {/* barcode scanner camera */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
{/* once scanned and return from ingredients page, display button to scan another item */}
      {scanned && <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
        <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 15, padding: 10}}>
          Scan Another Barcode</Text>
          </TouchableOpacity>}
    </View>
  );

  }
// export page to be imported into app.js
    export default FscannerScreen;

/////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    
    // button styling
    button: {
      alignItems: "center",
      alignContent: "center",
      backgroundColor: "#FF0000",
      height: 40,
      width: 200,
      borderRadius: 20,
      marginLeft: 80,
      marginBottom: 50
    }
  });
  
  
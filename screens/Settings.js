/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
 } from 'react-native';

//  settings page function
function SettingsScreen({ navigation }) {
  // return page render
    return (
      // first view container holding page contents
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* background image */}
        <Image source={require("../assets/images/background.png")} style={{width: '100%', height: "100%"}}/>
  
  {/* second view container holding all settings buttons */}
        <View style={{position: "absolute",backgroundColor: "#FFFFFF", opacity: 0.7, height: "90%", width: "90%", borderRadius: 10}}>
        {/* button 1 security */}
        <TouchableOpacity>
        <Text style={styles.settingsText}>Security</Text>
        </TouchableOpacity>
  
          {/* button 2 privacy */}
          <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10}}>
          <Text style={styles.settingsText}>Privacy</Text>
          </TouchableOpacity>
  
            {/* button 3 notifications */}
            <TouchableOpacity>
            <Text style={styles.settingsText}>Notifications</Text>
            </TouchableOpacity>
  
              {/* button 4 account */}
              <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10}}>
              <Text style={styles.settingsText}>Account</Text>
              </TouchableOpacity>
  
                {/* button 5 profile */}
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
                <Text style={styles.settingsText}>Profile</Text>
                </TouchableOpacity>
  
                  {/* button 6 about */}
                  <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10}}>
                  <Text style={styles.settingsText}>About</Text>
                  </TouchableOpacity>
  
                    {/* button 7 t&cs */}
                    <TouchableOpacity>
                    <Text style={styles.settingsText}>T&Cc</Text>
                    </TouchableOpacity>
  
                      {/* button 8 stored data*/}
                      <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10}}>
                      <Text style={styles.settingsText}>Stored Data</Text>
                      </TouchableOpacity>
  
                         {/* button 9 permissions */}
                        <TouchableOpacity>
                        <Text style={styles.settingsText}>Permissions</Text>
                        </TouchableOpacity>
  
                             {/* button 10 sign out */}
                            <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10}} onPress={() => navigation.navigate('Welcome')}>
                            <Text style={styles.settingsText2}>Sign Out!</Text>
                            </TouchableOpacity> 
  
        </View>
      </View>
    );
  }

  // export page to be imported into app.js
  export default SettingsScreen;

  /////////////////////////////////////////////// STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({ 
    // app container stlying
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000"
    },
  
    // text styling
  settingsText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 18
  },
  
  settingsText2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: '#FF0000',
    padding: 18.3
  }, 
  
  });
  
  
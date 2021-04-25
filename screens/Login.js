/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  TextInput,
  Button
 } from 'react-native';
 import * as Yup from 'yup';
 import Form from '../components/Forms/Form';
 import FormField from '../components/Forms/FormField';
 import { loginWithEmail } from '../components/Firebase/firebaseConfig';
 import FormErrorMessage from '../components/Forms/FormErrorMessage';



//////////// Code taken from expo-firebase-starter kit modified, which can be ///////////////////
// /////// found here: https://github.com/expo-community/expo-firebase-starter /////////////////

// const initialising validation variables
 const validationSchema = Yup.object().shape({
  email: Yup.string()
  // required variable for email
    .required('Please enter a registered email')
    .email()
    .label('Email'),
  password: Yup.string()
  // required variable for password, with 6 characters rule
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password')
});

// login screen function
 function LoginScreen ({ navigation }) {

  // const initialising password visibility
 const [passwordVisibility, setPasswordVisibility] = useState(true);
//  const initialising right handside icons of fields
  const [rightIcon, setRightIcon] = useState('eye');
  // const initialising login error handling
  const [loginError, setLoginError] = useState('');

  // function executing password visibility variable
  function handlePasswordVisibility() {
    // if right icon equals eye show password
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
      // if right icon equals to eye off, dont show password
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  // async storage handling email and password values
  async function handleOnLogin(values) {
    const { email, password } = values;
// try logging in with email and password
    try {
      await loginWithEmail(email, password);
      // catch any errors
    } catch (error) {
      // display error message
      setLoginError(error.message);
    }
  }



  //  returns page render
    return (
      // initial view container holding page content
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* Login image (background) */}
          <Image source={require("../assets/images/LoginImage.png")} style={{width: '100%', height: "100%", position: "absolute"}}/>
          {/* View container for the black bar with welcome text */}
          <View style={styles.rectangle}>
            {/* welcome text */}
              <Text style={styles.text}>Please login below:</Text>
          </View>
          {/* view container for input values */}
          <View style={styles.input}>
            {/* form with initial values set to empty */}
          <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handleOnLogin(values)}
      >
        {/* field 1 email initialised */}
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        {/* field 2 password initialised */}
        <FormField
          name="password"
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        {/* login error message */}
        {<FormErrorMessage error={loginError} visible={true} />}
      </Form>

        {/* confirm button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.confirm}>
          {/* confirm text */}
          <Text style={styles.text2}>Confirm</Text>
        </TouchableOpacity>
        {/* link to register pafge */}
        <Text style={styles.text3} onPress={() => navigation.navigate('Register')}> Dont have an account</Text>
</View>

        </View>
      );

 }

//  export for page to be inported in app.js
export default LoginScreen;

// styling
 const styles = StyleSheet.create({ 

  // page stlyling
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
      },
// Black bar styling
      rectangle: {
        backgroundColor: "#000000",
        height: 60,
        width: "100%",
        bottom: 15
      },
// initial text styling
      text: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#FFFFFF",
        textAlign: "center",
        padding: 20
      },
// input bars styling
      input: {
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: 50,
        borderColor: "#000000",
        borderWidth: 1,
        margin: 10,
        top: 140,
        borderRadius: 20,
        textAlign: "center",
        textAlign: "left",
        paddingLeft: 20
        
      },
// confirm button styling
      confirm: {
          backgroundColor: "#000000", 
          height: 40, 
          width: 180, 
          borderRadius: 20, 
          margin: 20,
          marginLeft: 55
        },


// confrim text styling
      text2: {
          color: '#FFFFFF', 
          textAlign: "center", 
          fontWeight: "bold", 
          padding: 10
        },
        text3: {
          color: '#0000FF', 
          textAlign: "center", 
          textDecorationLine: "underline",
          padding: 10,
          bottom: 20
        },

// input fields styling
        input:{
          width: "80%",
            height: 20,
            alignContent: "center",
            bottom: -20
        }
 });


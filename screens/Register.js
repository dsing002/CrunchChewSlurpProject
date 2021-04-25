/////////////////////////////////////////////// ALL IMPOrTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
 } from 'react-native';
 import * as Yup from 'yup';
 import Form from '../components/Forms/Form';
 import FormField from '../components/Forms/FormField';

/////////// code taken from expo-firebase-starter kit modified, which can be ///////// 
///////// found here https://github.com/expo-community/expo-firebase-starter /////////

// const initialising validation
 const validationSchema = Yup.object().shape({
  //  variable requiring name
    name: Yup.string()
      .required()
      .label('Name'),
      // variable requiring email
    email: Yup.string()
      .required('Please enter a valid email')
      .email()
      .label('Email'),
      // variable requiring password
    password: Yup.string()
      .required()
      .min(6, 'Password must have at least 6 characters')
      .label('Password'),
      // variable requiring confirm password
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Confirm Password must match Password')
      .required('Confirm Password is required')
  });
  

// register screen function
 function RegisterScreen ({ navigation }) {

// const initialising password visibility
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
      true
    );
    
    // const initialising register variable
    const [registerError, setRegisterError] = useState('');

    // function executing password visibility
    function handlePasswordVisibility() {
      // if right icon is equal to eye, then show password
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
          // else if right icon is equal to eye off, dont show password
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      }
    
      // function handling confirm password visibility variable
      function handleConfirmPasswordVisibility() {
        // if right icon is equal to eye, then show password
        if (confirmPasswordIcon === 'eye') {
          setConfirmPasswordIcon('eye-off');
          setConfirmPasswordVisibility(!confirmPasswordVisibility);
          // else if right icon is equal to eye off, dont show password
        } else if (confirmPasswordIcon === 'eye-off') {
          setConfirmPasswordIcon('eye');
          setConfirmPasswordVisibility(!confirmPasswordVisibility);
        }
      }
    
      // async storage initialising email and password variable
      async function handleOnSignUp(values, actions) {
        const { email, password } = values;
        // try registering with email and password
        try {
          // wait for email and passowrd field to be filled
          await registerWithEmail(email, password);
          // catch any errors
        } catch (error) {
          // display error message
          setRegisterError(error.message);
        }
      }
  
  //  returns page render
    return (
      // initial view container holding page content
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

             {/* Login image (background) */}
          <Image source={require("../assets/images/RegisterImage.png")} 
          style={{width: '100%', height: "100%", position: "absolute"}}/>
          <View style={styles.rectangle}>
            {/* welcome text */}
              <Text style={styles.text}>Please Register below:</Text>
          </View>
          {/* form initialising values to empty */}
           <Form 
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => handleOnSignUp(values)}
      >
        {/* view container for form */}
        <View style={styles.input}>
          {/* field 1 name initialised */}
         <FormField
          name="name"
          leftIcon="account"
          placeholder="Enter name"
          autoFocus={true}
        />
        {/* field 2 email initialised */}
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        {/* field 3 password initialised */}
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
        {/* field 4 confirm password initialised */}
        <FormField
          name="confirmPassword"
          leftIcon="lock"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={confirmPasswordVisibility}
          textContentType="password"
          rightIcon={confirmPasswordIcon}
          handlePasswordVisibility={handleConfirmPasswordVisibility}
        />

        {/* confirm button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.confirm}>
          {/* confirm text */}
          <Text style={styles.text2}>Confirm</Text>
        </TouchableOpacity>
        {/* login account link */}
        <Text style={styles.text3} onPress={() => navigation.navigate('Login')}> 
        Already have an account</Text>
        </View>
    </Form>
        </View>
      );

 }

//  export for page to be imported in app.js
export default RegisterScreen;

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
        bottom: 60,
        marginBottom: 10
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
        input: {
            width: "80%",
            height: 20,
            alignContent: "center",
            bottom: 60
        }
 });

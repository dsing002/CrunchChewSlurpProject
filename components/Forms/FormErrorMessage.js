/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../utils/colors';

////////// code taken from expo-firebase-starter kit modified, which can be found here https://github.com/expo-community/expo-firebase-starter /////////

// export function form error message
export default function FormErrorMessage({ error, visible }) {
  // if no error is visible
  if (!error || !visible) {
    // return nothing
    return null;
  }

  // return rendering error text
  return <Text style={styles.errorText}>{error}</Text>;
}

// page styling
const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: Colors.red,
    fontSize: 16,
    marginBottom: -8 ,
    marginTop: -9,
    fontWeight: '800',
    textAlign: "center"
  }
});
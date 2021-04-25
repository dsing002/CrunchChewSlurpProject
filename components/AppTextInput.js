/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../utils/colors';

////////// code taken from expo-firebase-starter kit modified, which can be found here https://github.com/expo-community/expo-firebase-starter /////////

// export function app text input
export default function AppTextInput({
  // export icon and styling
    leftIcon,
    width = '100%',
    rightIcon,
    handlePasswordVisibility,
    ...otherProps
  }) {
    // return render page
    return (
      // view style for container
      <View style={[styles.container, { width }]}>
        {/* left icon initialised with styling */}
        {leftIcon && (
          <MaterialCommunityIcons
            name={leftIcon}
            size={20}
            color={Colors.mediumGrey}
            style={styles.icon}
          />
        )}
        {/* text input initialised with styling */}
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.mediumGrey}
          {...otherProps}
        />
        {/* right icon initiliased with styling */}
        {rightIcon && (
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={20}
              color={Colors.mediumGrey}
              style={styles.rightIconStyles}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
  
  // styling for page content
  const styles = StyleSheet.create({
    // cpnstainer styling
    container: {
      backgroundColor: Colors.lightGrey,
      borderRadius: 10,
      borderColor: "#000000",
      borderWidth: 0.5,
      flexDirection: 'row',
      padding: 15,
      marginVertical: 10
    },
    // icon styling
    icon: {
      marginRight: 10
    },
    // input styling
    input: {
      flex: 1,
      width: '100%',
      fontSize: 18,
      color: Colors.black
    },
    // right icon styling
    rightIconStyles: {
      alignSelf: 'center',
      marginLeft: 10
    }
  });
  
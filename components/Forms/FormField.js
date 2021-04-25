/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import FormErrorMessage from './FormErrorMessage';

////////// code taken from expo-firebase-starter kit modified, which can be found here https://github.com/expo-community/expo-firebase-starter /////////

// export function form field
export default function FormField({ name, width, ...otherProps }) {
  // const initialising field values and errors
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched
  } = useFormikContext();

  // return render page
  return (
    // react fragment set to apptextinput
    <React.Fragment >
       
       {/* input initialises the values needed for forms */}
      <AppTextInput
        value={values[name]}
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
     
    </React.Fragment>
  );
}

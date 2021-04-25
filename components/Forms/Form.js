/////////////////////////////////////////////// ALL IMPORTED DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Formik } from 'formik';

////////// code taken from expo-firebase-starter kit modified, which can be found here https://github.com/expo-community/expo-firebase-starter /////////

// export function form
export default function Form({
  children,
  initialValues,
  onSubmit,
  validationSchema
}) {
  // reutrn page render
  return (
    // form const 
    <Formik
    // for inital values
      initialValues={initialValues}
      // for validation
      validationSchema={validationSchema}
      // on submiut
      onSubmit={onSubmit}
    >
      {/* react fragment set to children */}
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
}
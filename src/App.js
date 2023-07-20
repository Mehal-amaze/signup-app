import React from 'react';
//import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import Dashboard from './components/Dashboard';
//import store from './redux/store'; 

const formFields = {
  header: 'Create a new account',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUp: 
      {
        label: 'Email',
        key: 'email',
        isRequired: true,
        displayOrder: 1,
        type: 'string'
      ,
      
        label: 'Password',
        key: 'password',
        isRequired: true,
        displayOrder: 2,
        type: 'password'
      ,
      
        label: 'Given Name',
        key: 'given_name',
        isRequired: true,
        displayOrder: 3,
        type: 'string'
      ,
      
        label: 'Family Name',
        key: 'family_name',
        isRequired: true,
        displayOrder: 4,
        type: 'string'
      ,
      
        label: 'Birthdate',
        key: 'birthdate',
        isRequired: true,
        displayOrder: 5,
        type: 'string'
      ,
    
  }
}


// Adding the signUpAttributes prop is typically not needed since attributes are inferred via Zero Configuration.
// For the sake of this example they have been explicitly added so you can copy and paste this into your own application and see it work. 
//const signUpAttributes=['birthdate', 'family_name', 'preferred_username']

export default function App() {
 return (
   <Authenticator formFields={formFields} >
     {({ signOut }) => <button onClick={signOut}>Sign out</button>}
   </Authenticator>
 );
}


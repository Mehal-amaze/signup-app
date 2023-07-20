import React from 'react';
//import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import Dashboard from './components/Dashboard';
//import store from './redux/store'; 

const formFields = {
  signUp: {
    email: {
      order:1
    },
    family_name: {
      order: 2
    },
    preferred_username: {
      order: 4
    },
    birthdate: {
      order: 3
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
  },
 }


// Adding the signUpAttributes prop is typically not needed since attributes are inferred via Zero Configuration.
// For the sake of this example they have been explicitly added so you can copy and paste this into your own application and see it work. 
const signUpAttributes=['birthdate', 'family_name', 'preferred_username']

export default function App() {
 return (
   <Authenticator formFields={formFields} signUpAttributes={signUpAttributes}>
     {({ signOut }) => <button onClick={signOut}>Sign out</button>}
   </Authenticator>
 );
}
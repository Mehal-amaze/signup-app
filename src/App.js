import React from 'react';
//import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import Dashboard from './components/Dashboard';
//import store from './redux/store'; 

function App() {
  const signUpConfig = {
    header: 'Create a new account',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'Given Name',
        key: 'given_name',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'Family Name',
        key: 'family_name',
        required: true,
        displayOrder: 4,
        type: 'string'
      },
      {
        label: 'Birthdate',
        key: 'birthdate',
        required: true,
        displayOrder: 5,
        type: 'string'
      },
    ]
  };

  return (
    
      
        <div className="App">
          <h1>COB Portal</h1> 
          
            
          <AmplifyAuthenticator>
          <CustomSignUp />
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={[
              // { type: "username" },
              { type: "email" },
              { type: "password" },
              {
                type: "string",
                label: "Birthdate",
                key: "birthdate",
                placeholder: 3,
                required: true,
              }
            ]}
          />
        </AmplifyAuthenticator>
            
          
        </div>
      
    
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Ensure the path is correct for your App.js file
import './index.css'; // If you have a global CSS file

import { FronteggProvider } from '@frontegg/react';

// Frontegg Configurations
const contextOptions = {
  baseUrl: 'https://app-2nys6d8bkqvf.frontegg.com', // The Base URL you got from Frontegg
  clientId: '01abc3bf-95d0-452f-93e2-22281ccc11a0', // The Client ID you got from Frontegg
  appId: '25aec33a-04b9-4698-baa3-e167bfb93527' // The App ID you got from Frontegg
};

const authOptions = {
  keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

// Create React Root and Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true} // If you are using Frontegg's hosted login box
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);

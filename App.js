import React, { useState } from 'react';

import { FronteggProvider, useAuth } from '@frontegg/react';


function AppContent() {
  
  const [message, setMessage] = useState("המטלה הביתית של דין עבור Frontegg!");
  
  const { user, isAuthenticated, isLoading } = useAuth();

  
  const handleClick = () => {
    setMessage('לחצת על הכפתור!');
  };

  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full rounded-lg">
          <p className="text-gray-600 text-lg">טוען אימות Frontegg...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {message}
        </h1>
        <p className="text-gray-600 mb-6">
          זוהי אפליקציית React בסיסית המשולבת עם Frontegg.
        </p>

        {/* STATUS */}
        {isAuthenticated ? (
          <p className="text-green-600 mb-4 font-medium">
            WELCOME, {user?.name || user?.email || 'משתמש מאומת'}!
          </p>
        ) : (
          <p className="text-red-600 mb-4 font-medium">
            אינך מאומת. אנא התחבר דרך Frontegg.
          </p>
        )}

        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          שנה הודעה
        </button>
      </div>
    </div>
  );
}


function App() {

  const fronteggConfig = {
    clientId: 'YOUR_FRONTEGG_CLIENT_ID', 
    baseUrl: 'https://app-YOUR_TENANT.frontegg.com',
    
    
    
    redirectUrl: window.location.origin + '/callback',
  };

  return (
    <FronteggProvider {...fronteggConfig}>
      <AppContent />
    </FronteggProvider>
  );
}

export default App;

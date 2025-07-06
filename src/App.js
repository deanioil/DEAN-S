import React, { useState } from 'react';
// Import useAuth from @frontegg/react
import { useAuth } from '@frontegg/react';

// This component will contain the application logic and use Frontegg Hooks
function App() {
  // State to manage the displayed message
  const [message, setMessage] = useState("Dean's home assignment for Frontegg!");
  // Use Frontegg's authentication hook to get user and authentication status
  const { user, isAuthenticated, isLoading } = useAuth();

  // Function to update the message
  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  // Display a loading message while Frontegg is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full rounded-lg">
          <p className="text-gray-600 text-lg">Loading Frontegg authentication...</p>
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
          This is a basic React application integrated with Frontegg.
        </p>

        {/* Display authentication status */}
        {isAuthenticated ? (
          <p className="text-green-600 mb-4 font-medium">
            Welcome, {user?.name || user?.email || 'Authenticated User'}!
          </p>
        ) : (
          <p className="text-red-600 mb-4 font-medium">
            You are not authenticated. Please log in through Frontegg.
          </p>
        )}

        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Change Message
        </button>
      </div>
    </div>
  );
}

export default App; // Export App directly

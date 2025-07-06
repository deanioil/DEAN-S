import React, { useState } from 'react';

function App() {
  // State to manage the displayed message
  const [message, setMessage] = useState('Hello from my simple app!');

  // Function to update the message
  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {message}
        </h1>
        <p className="text-gray-600 mb-6">
          This is a basic React application.
        </p>
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

export default App;

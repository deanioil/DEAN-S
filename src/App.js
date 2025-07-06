import React, { useState, useEffect } from 'react'; // Added useEffect
import './App.css'; // Assuming you have an App.css file
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // State for custom message box
  const [messageBox, setMessageBox] = useState({ visible: false, title: '', content: '' });

  // Function to show custom message box
  const showMessageBox = (title, content) => {
    setMessageBox({ visible: true, title, content });
  };

  // Function to hide custom message box
  const hideMessageBox = () => {
    setMessageBox({ visible: false, title: '', content: '' });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {messageBox.visible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">{messageBox.title}</h2>
            <p className="text-gray-700 mb-6 break-all">{messageBox.content}</p>
            <button
              onClick={hideMessageBox}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        {isAuthenticated ? (
          <div>
            <div className="mb-4">
              {user?.profilePictureUrl && (
                <img
                  src={user.profilePictureUrl}
                  alt={user?.name || 'User Profile'}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/96x96/cccccc/333333?text=User"; }} // Placeholder on error
                />
              )}
              <span className="text-lg font-semibold text-gray-800">
                Logged in as: {user?.name || user?.email || 'Authenticated User'}
              </span>
            </div>
            <div className="mb-4">
              <button
                onClick={() => showMessageBox('Access Token', user.accessToken)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 w-full"
              >
                What is my access token?
              </button>
            </div>
            <div>
              <button
                onClick={() => logout()}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full"
              >
                Click to logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 w-full"
            >
              Click me to login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

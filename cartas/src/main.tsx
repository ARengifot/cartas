import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import LoveLetterBook from './romantic-letter-book';
import SplashScreenComponent from './SplashScreen';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2 seconds, then load the app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <SplashScreenComponent isLoading={true} />
  ) : (
    <LoveLetterBook />
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

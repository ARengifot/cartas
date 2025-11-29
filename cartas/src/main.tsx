import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import LoveLetterBook from './romantic-letter-book';
import SplashScreenComponent from './SplashScreen';
import './index.css';
import { SplashScreen } from '@capacitor/splash-screen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide Capacitor splash screen and show our custom one
    const hideSplash = async () => {
      try {
        await SplashScreen.hide();
      } catch (e) {
        console.log('SplashScreen not available:', e);
      }
    };
    
    hideSplash();

    // Show splash screen for 3 seconds, then load the app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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

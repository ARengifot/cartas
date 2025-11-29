import React, { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import LoveLetterBook from './romantic-letter-book';
import SplashScreenComponent from './SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (Capacitor.isNativePlatform()) {
          try {
            await SplashScreen.show({
              showDuration: 3000,
              autoHide: true,
            });
          } catch (err) {
            console.log('SplashScreen error (non-critical):', err);
          }
        }

        // Set timeout to ensure we exit loading screen
        setTimeout(() => {
          setIsLoading(false);
          if (Capacitor.isNativePlatform()) {
            try {
              SplashScreen.hide();
            } catch (err) {
              console.log('SplashScreen hide error:', err);
            }
          }
        }, 2500);

        // Force exit loading after 5 seconds max
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error('Error initializing app:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading && Capacitor.isNativePlatform()) {
    return <SplashScreenComponent isLoading={true} />;
  }

  return <LoveLetterBook />;
}

export default App;

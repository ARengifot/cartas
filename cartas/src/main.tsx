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
          // Show splash screen in native app
          await SplashScreen.show({
            showDuration: 3000,
            autoHide: true,
          });
        }

        // Simulate loading delay
        setTimeout(() => {
          setIsLoading(false);
          if (Capacitor.isNativePlatform()) {
            SplashScreen.hide();
          }
        }, 2500);
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

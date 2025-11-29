import React, { useEffect, useState } from 'react';
import LoveLetterBook from './romantic-letter-book';
import SplashScreenComponent from './SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple loading timer - just show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreenComponent isLoading={true} />;
  }

  return <LoveLetterBook />;
}

export default App;

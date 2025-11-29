import React, { useEffect, useState } from 'react';
import LoveLetterBook from './romantic-letter-book';
import SplashScreenComponent from './SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a timeout to move past loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Error handler for unhandled promise rejections
    const handleError = (event: PromiseRejectionEvent) => {
      console.error('Promise rejection:', event.reason);
      setHasError(false); // Still show the app
      setIsLoading(false);
    };

    window.addEventListener('unhandledrejection', handleError);

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  // If still loading, show splash screen
  if (isLoading) {
    return <SplashScreenComponent isLoading={true} />;
  }

  // If there's an error, show fallback
  if (hasError) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #001a4d 0%, #003d7a 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>Error cargando la app</h1>
        <p>Por favor, reinicia la aplicación</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#4facfe',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Show the main app
  return <LoveLetterBook />;
}

export default App;

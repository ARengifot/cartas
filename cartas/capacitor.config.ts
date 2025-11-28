import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cartasParaMiAmorcito.app',
  appName: 'Cartas para mi amorcito',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#003d7a',
      showSpinner: true,
      spinnerColor: '#4FACFE',
      spinnerStyle: 'large',
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#003d7a',
      overlaysWebView: false,
    },
    Keyboard: {
      resize: 'none',
      resizeOnFullScreen: true,
    }
  }
};

export default config;

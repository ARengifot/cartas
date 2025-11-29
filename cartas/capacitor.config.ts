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
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#1e3a8a',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#1e3a8a',
      overlaysWebView: false,
    },
    Keyboard: {
      resize: 'none',
      resizeOnFullScreen: true,
    }
  }
};

export default config;

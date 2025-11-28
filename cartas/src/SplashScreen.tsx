import React from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  isLoading?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isLoading = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 text-sky-400 opacity-10 animate-pulse">
          <Sparkles className="w-full h-full" />
        </div>
      </div>

      <div className="z-10 text-center space-y-8 max-w-md">
        {/* Photo of couple */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-full p-2 w-40 h-40 flex items-center justify-center overflow-hidden border-4 border-sky-300">
              <img 
                src="/Amorcito1.jpg" 
                alt="Nosotros" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200" style={{ fontFamily: 'cursive' }}>
            Cartas para mi
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200" style={{ fontFamily: 'cursive' }}>
            amorcito
          </p>
        </div>

        {/* Loading spinner */}
        {isLoading && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <p className="text-blue-200 text-sm" style={{ fontFamily: 'cursive' }}>
              Cargando tus cartas...
            </p>
          </div>
        )}

        {/* Decorative text */}
        <p className="text-blue-300 italic text-sm" style={{ fontFamily: 'cursive' }}>
          ✨ 30 cartas de amor ✨
        </p>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          50% { transform: scale(1); }
        }

        .animate-heartbeat-custom {
          animation: heartbeat 1.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;

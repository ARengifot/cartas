import React from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  isLoading?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isLoading = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Falling petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall text-pink-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              fontSize: `${16 + Math.random() * 12}px`,
              animation: `fall ${8 + Math.random() * 6}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative rounded-full p-3 w-44 h-44 flex items-center justify-center overflow-hidden border-4 border-pink-300 shadow-2xl">
              <img 
                src="./Amorcito1.jpg" 
                alt="Nosotros" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-200" style={{ fontFamily: 'cursive' }}>
            Cartas para mi
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-200" style={{ fontFamily: 'cursive' }}>
            amorcito
          </p>
        </div>

        {/* Loading spinner */}
        {isLoading && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
              <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <p className="text-pink-200 text-sm" style={{ fontFamily: 'cursive' }}>
              Preparando...
            </p>
          </div>
        )}

        {/* Decorative text */}
        <p className="text-pink-300 italic text-sm" style={{ fontFamily: 'cursive' }}>
          ✨ 30 cartas de amor ✨
        </p>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          50% { transform: scale(1); }
        }

        .animate-fall {
          animation: fall 12s linear infinite;
        }

        .animate-heartbeat-custom {
          animation: heartbeat 1.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;

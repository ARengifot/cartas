import React from 'react';

const FallingPetals: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall text-pink-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              fontSize: `${16 + Math.random() * 12}px`,
              animation: `fall ${10 + Math.random() * 8}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            🌸
          </div>
        ))}
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
      `}</style>
    </>
  );
};

export default FallingPetals;

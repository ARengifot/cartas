import { useEffect, useRef, useState } from 'react';

const useBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Crear un elemento audio si no existe
    if (!audioRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3; // 30% de volumen
      
      // Usar música ambient de fondo (puedes cambiar esto por tu propia URL)
      // Esta es una música libre de copyright romantic
      audio.src = 'https://assets.mixkit.co/active_storage/sfx/2718/2718-preview.mp3';
      
      audioRef.current = audio;
    }

    // Intentar reproducir
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log('Audio autoplay prevented:', err);
          // Los navegadores modernos previenen autoplay, necesita interacción del usuario
        });
      }
    };

    // Reproducir con un pequeño delay
    const timer = setTimeout(playAudio, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return { isPlaying, toggleMusic, audioRef };
};

export default useBackgroundMusic;

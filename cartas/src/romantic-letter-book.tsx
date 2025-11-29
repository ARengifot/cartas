import React, { useState, useEffect } from 'react';
import { Heart, Lock, BookOpen, ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX } from 'lucide-react';

// Simple music management hook
const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // 30% volume
      audioRef.current.src = 'https://assets.mixkit.co/active_storage/sfx/2717/2717-preview.mp3'; // Soft background music
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Autoplay blocked by browser. Click again to play.');
    }
  };

  return { isPlaying, toggleMusic };
};

// Componente de Partículas flotantes
const FloatingPetals = () => {
  const petals = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
            fontSize: `${12 + Math.random() * 8}px`,
            animation: `fall-petal ${8 + Math.random() * 4}s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          🤍
        </div>
      ))}
      <style>{`
        @keyframes fall-petal {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          50% { transform: scale(1); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(79, 172, 254, 0.5)); }
          50% { filter: drop-shadow(0 0 15px rgba(79, 172, 254, 0.8)); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-heartbeat-custom {
          animation: heartbeat 1.3s ease-in-out infinite;
        }
        
        .animate-float-up {
          animation: float-up 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

const LoveLetterBook = () => {
  const [currentView, setCurrentView] = useState('cover'); // cover, index, letter
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [pageTransition, setPageTransition] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  const { isPlaying, toggleMusic } = useBackgroundMusic();

  const startDate = new Date('2025-11-27');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const letters = [
    { id: 1, title: "Tu Belleza", preview: "Amo tu belleza, es una de las cosas que día tras día..." },
    { id: 2, title: "Tu Belleza Interior", preview: "Tu belleza interna es algo que me tiene igual de loco..." },
    { id: 3, title: "Mi Vocación", preview: "Una de mis metas en esta vida es darte todo..." },
    { id: 4, title: "Cocinando para Ti", preview: "Recuerdo la primera vez que me imaginé cocinarte..." },
    { id: 5, title: "Nuestros Primeros Meses", preview: "Viendo el pasado recuerdo muchas cosas que vivimos..." },
    { id: 6, title: "Primera Vez que Te Lo Pedí", preview: "Aún recuerdo cuando te pedí que fueras mi novia..." },
    { id: 7, title: "Nuestra Primera Discusión", preview: "Yo sé que no todo ha sido perfecto..." },
    { id: 8, title: "Tu Primera Visita", preview: "Otro recuerdo súper curioso es cuando te traje..." },
    { id: 9, title: "Me Motivas", preview: "Amo demasiado la forma en la que me motivas..." },
    { id: 10, title: "Buenos Días", preview: "No sabes lo hermoso que se siente despertarme..." },
    { id: 11, title: "Nuestro Futuro", preview: "Me pone demasiado contento pensar en el futuro..." },
    { id: 12, title: "Cómo Llegaste a Mi Vida", preview: "A veces me pongo a recordar esos momentos..." },
    { id: 13, title: "Soñando Juntos", preview: "Me encanta cuando hablamos y empezamos a soñar..." },
    { id: 14, title: "Días Especiales", preview: "Hay algo que me encanta de ti y es cómo haces..." },
    { id: 15, title: "Tu Familia", preview: "Me acuerdo de la primera vez que vi a tu familia..." },
    { id: 16, title: "Vivir Contigo", preview: "A veces me imagino cómo sería vivir contigo..." },
    { id: 17, title: "Nuestra Comunicación", preview: "Algo que me encanta de nosotros es cómo hemos aprendido..." },
    { id: 18, title: "Ser Yo Mismo", preview: "Me gusta demasiado que contigo puedo ser yo mismo..." },
    { id: 19, title: "Nuestro Crecimiento", preview: "A veces pienso en lo mucho que hemos crecido..." },
    { id: 20, title: "Tus Metas", preview: "Me encanta cuando me hablas de tus metas..." },
    { id: 21, title: "Tu Esencia", preview: "Hay momentos en los que simplemente veo una foto..." },
    { id: 22, title: "Nuestras Madrugadas", preview: "Recuerdo todas esas noches en las que nos quedamos..." },
    { id: 23, title: "Tu Nobleza", preview: "Siempre me sorprende tu capacidad de cuidar..." },
    { id: 24, title: "Nuestro Reencuentro", preview: "A veces pienso en ese día en el que nos volvamos..." },
    { id: 25, title: "Cocinando Juntos", preview: "Me encanta cuando cocinamos juntos..." },
    { id: 26, title: "Gracias", preview: "Hay días en los que solo quiero decirte gracias..." },
    { id: 27, title: "Tu Sentido del Humor", preview: "Una de las cosas que más disfruto de ti..." },
    { id: 28, title: "Tu Confianza", preview: "Siento demasiado bonito cuando me demuestras..." },
    { id: 29, title: "Tu Mirada", preview: "Me encanta cuando haces ese gesto con tus ojos..." },
    { id: 30, title: "Para Terminar", preview: "Para terminar estas treinta cartas, solo quiero decirte..." }
  ];

  const letterContents = [
    "Amo tu belleza, es una de las cosas que día tras día sigo pensando. En el mundo hay muchas mujeres hermosas, pero que una mujer tan bella como tú decida estar conmigo es algo que todavía me sorprende. Cuando miro tus ojos y tu carita hermosa no puedo sentir otra cosa que amor y ternura. Eso es lo único que puedes provocar en mí cuando te veo.\n\nMe impresiona mucho, o bueno, no sé si me impresiona, pero me sigue pareciendo increíble la manera tan pura en la que tu belleza existe. Aun sin maquillaje, sin rubor, sin nada de esas cosas, sigues siendo igual de hermosa. No sé por qué, pero cuando tienes el cabello sin alisar, aunque a ti no te guste y digas que no te ves bien, a mí me parece que te ves demasiado hermosa. Es una verdad que trasciende más allá de los ojos, una belleza que se queda grabada en mi pensamiento. De verdad lo único que no puedo dejar de pensar es cómo fui capaz de conseguir a una mujer tan bella como tú.",
    
    "En la anterior te hablé un poco de lo que es tu belleza externa, pero tu belleza interna es algo que me tiene igual de loco. Tus sentimientos, tu forma de pensar, tu manera de expresarte y de actuar todos los días me enamoran demasiado. No sé cómo puedes ser una persona tan increíble. Me parece impresionante cómo tu corazón tan empático se refleja en cada cosa que haces. Tus acciones hablan por ti.\n\nTu forma de tratar a las personas, de ayudar, de escuchar, de querer, es algo que me inspira a ser mejor. Me motiva a convertirme en alguien capaz de manejar un corazón tan hermoso como el tuyo. No sé cómo es que puedes ser tan increíble en todo sentido, pero lo eres, y eso me enamora cada día.",
    
    "Tú sabes que una de mis metas en esta vida, y más que meta ya es como una vocación, es darte todo lo que te mereces. Hacerte la mujer más feliz del mundo. Quiero que sientas que todo lo que soñaste en algún momento se está haciendo realidad. Lo digo porque cuando te veo, veo a la mujer que amo, la mujer a la que quiero entregarle todo de mí y cuidarla para que nunca le falte nada.\n\nPuede que ahora no sea fácil darte el mundo, pero sé con seguridad que con el tiempo lo lograré. Tú te mereces todo y más. Eres una mujer a la que uno podría entregarle el mundo entero y aun así sería poco para lo increíble que eres.",
    
    "Recuerdo la primera vez que me imaginé cómo sería cocinarte algo. Siento que por medio de la cocina no solo se transmite sabor o alimentación, sino también amor y cariño. Yo me imaginaba haciéndote esa pasta que tanto te gusta. Te voy a ser sincero, al principio solo sabía hacer la carbonara, pero cuando me fui a Estados Unidos pensé que, siendo tu comida favorita, tenía que aprender más estilos de pasta.\n\nQuería dominarla para que en algún futuro pudiera cocinarte todo lo que desearas. Solo imaginaba ser tu chef personal, alguien que te hiciera mucha mucha pasta, todas las que existen, solo porque sé lo mucho que la amas.",
    
    "Viendo el pasado recuerdo muchas cosas que vivimos y que hasta hoy me parecen increíbles. Todo lo que disfrutamos juntos en tan poco tiempo. Porque si lo pensamos bien, han pasado nueve meses, pero antes de que yo viajara a Estados Unidos realmente compartimos solo cuatro. Aun así hicimos muchísimas cosas, pasamos por momentos muy lindos y también por situaciones complejas.\n\nHabía días en los que pensaba si te cansarías de mí, si realmente estaría a la altura de una mujer tan increíble como tú. Y más cuando tú decías que yo no sabía ni besar. Me parecía increíble cómo logramos superar esa etapa, porque en ese momento se veía bastante densa. Ahora ya dejamos todo eso atrás, pero cuando lo recuerdo me da una nostalgia loca.",
    
    "Aún recuerdo cuando te pedí que fueras mi novia por primera vez. Es un momento imborrable en mi memoria. Pedírselo al amor de tu vida es algo que nunca se olvida. Esa semana estaba súper nervioso porque nunca había ido a un spa así y porque la reserva no era económica. Yo no tenía el dinero así no más para pagar todo eso, pero sentía que era una forma muy linda de pedírtelo.\n\nEl lugar me parecía hermoso, aunque la situación fue curiosa porque no llevamos chanclas ni toalla ni nada. Fue rarísimo, demasiado improvisado. Cuando viste el letrero sentí que era un momento muy especial, aunque al principio sentí que no era el contexto ideal. Creo que pudo haber sido mejor. Por eso todavía no te lo he vuelto a pedir. Estoy esperando el lugar perfecto, la situación perfecta, algo inolvidable. Ya tengo ideas y quiero que sea algo demasiado especial.",
    
    "Yo sé que no todo ha sido perfecto, que hemos tenido muchas discusiones. Todavía me acuerdo de la primera, en Diosa Cervecera. Fue por algo a lo que yo no le había dado la importancia que ameritaba y tú estabas realmente molesta. Yo me lo tomé como recocha sin entender nada y ahora me parece curioso cómo desde ese momento han pasado tantas cosas.\n\nDiscusiones, reconciliaciones, momentos hermosos. Hoy en día veo esa primera discusión como algo lindo, como un recuerdo que guardo en mi corazón porque fue parte de nuestro proceso.",
    
    "Otro recuerdo súper curioso de esos primeros meses es cuando te traje a mi casa por primera vez. Nos pusimos a ver una película y estábamos súper arrunchados. Ese momento lo atesoro demasiado porque fue la primera vez que traje a una mujer a mi casa y se la presenté a Rosita.\n\nA pesar de lo simple del plan, sentía una emoción enorme solo por estar contigo. Ese día entendí que no importa el plan mientras te tenga a ti. Contigo cualquier cosa se convierte en la mejor experiencia.",
    
    "Amo demasiado la forma en la que me motivas cada día a ser una mejor persona. Un mejor hombre, un mejor ser humano. Verte a ti actuar, ver cómo te comportas en tu día a día, es suficiente para impulsarme a dar lo mejor de mí. Estar a tu lado me ha hecho comprender muchas cosas sobre el amor, una de ellas es que el amor transforma.\n\nContigo entendí que no soy perfecto, que todavía tengo muchas cosas por mejorar, pero también entendí que vale la pena hacerlo. Antes de conocerte pensaba que la vida era un banano, que no necesitaba cambiar. Pero contigo entendí que mejorar es necesario, que hay que crecer todos los días.",
    
    "No sabes lo hermoso que se siente despertarme cada mañana y ver un mensaje tuyo. Eso me llena de alegría desde el primer momento del día. Un simple mensaje es capaz de cambiarme el estado de ánimo, de llenarme de energía y hacerme sentir querido.\n\nAntes iniciaba mis días sin esperar nada, pero ahora lo primero que espero eres tú. Es increíble cómo puedes tener tanto impacto en mi día desde que abro los ojos.",
    
    "Me pone demasiado contento pensar en el futuro y saber que tenemos tantas cosas por vivir. Quiero cumplir nuestro primer viaje juntos a Medellín, hacer que sea un viaje inolvidable. Me emociona pensar en lo increíble que será compartir esa experiencia contigo.\n\nMe encanta la idea de que ese sea nuestro primer viaje juntos. Siento que va a ser algo muy especial, algo que recordaremos siempre.",
    
    "A veces me pongo a recordar esos momentos en los que apenas nos estábamos conociendo y me impresiona cómo, sin darme cuenta, fuiste tomando un espacio gigante en mi vida. No fue repentino, fue más como un proceso natural en el que cada día me gustabas más. Cada llamada, cada salida, cada conversación iba construyendo algo que yo no sabía que necesitaba.\n\nMe encanta pensar en eso, en cómo dos personas pueden encontrarse así de bonito sin planearlo. Y ahora, mirándolo desde aquí, siento que todo tenía sentido. Que cada cosa que pasó antes de conocerte me estaba llevando a ti.",
    
    "Me encanta cuando hablamos y sin darnos cuenta empezamos a soñar con cosas del futuro. No son sueños exagerados, son cosas simples pero reales. Cocinar juntos, viajar, tener un espacio propio, vivir cosas nuevas. Me gusta la tranquilidad que me das, esa sensación de estabilidad que solo tú logras.\n\nY me encanta saber que tú también te ves conmigo en esos escenarios. Eso para mí significa demasiado, porque siento que no son palabras al aire sino algo que ambos sentimos de verdad.",
    
    "Hay algo que me encanta demasiado de ti y es cómo haces que un día normal se sienta especial. A veces no estamos haciendo nada del otro mundo, solo hablando o acompañándonos en silencio, pero aun así siento esa energía tan bonita que tienes.\n\nMe calmas, me llenas y haces que incluso los días más pesados sean más suaves. Eso no lo hace cualquiera. Tienes una esencia que transforma cualquier ambiente sin que te des cuenta.",
    
    "Me acuerdo de la primera vez que vi a tu familia y aunque estaba muy nervioso, al final me quedó esa sensación bonita de saber que estaba entrando a algo importante. Me sentí bien, me sentí incluido, me sentí parte. Pensar en eso ahora me llena de alegría porque con el tiempo todo ha ido creciendo.\n\nYa no soy un desconocido, soy alguien a quien le tienen cariño porque te cuido y te hago feliz. Y eso es algo que valoro demasiado, porque tú y tu familia siempre van a ser algo que quiero respetar y cuidar.",
    
    "A veces me imagino cómo sería vivir contigo. Me imagino esas mañanas donde te despiertas con ese cabello loco que tanto dices que odias pero que para mí es de lo más hermoso. Me imagino poner música mientras nos arreglamos, hacer desayuno juntos, pelear por quién usa primero el baño.\n\nSon cosas tan simples, pero tan reales, que me hacen querer más ese futuro contigo. No lo veo como un sueño lejano, sino como algo que sé que algún día vamos a lograr.",
    
    "Algo que me encanta de nosotros es cómo hemos aprendido a comunicarnos. No siempre es fácil, sí hemos tenido discusiones fuertes, pero siempre encontramos la forma de entendernos. Me gusta que no evitamos los problemas, que aunque duela, hablamos lo que toca hablar. Eso nos ha hecho crecer demasiado.\n\nContigo aprendí que el amor no es evitar discutir, es saber resolver. Es elegir quedarse incluso cuando el momento está tenso. Eso es algo que valoro muchísimo.",
    
    "Me gusta demasiado que contigo puedo ser yo mismo. Contigo no tengo que fingir nada, no tengo que pretender ser alguien más. Tú me haces sentir seguro y querido tal cual soy. Contigo puedo abrirme, puedo contar mis miedos, puedo llorar si toca, puedo reír sin control.\n\nEso es algo que no se encuentra todos los días. Tener un espacio así contigo vale más de lo que imaginas.",
    
    "A veces pienso en lo mucho que hemos crecido desde el principio. Éramos más inmaduros, más impulsivos, y hoy somos muy diferentes. Hemos cambiado, hemos aprendido, hemos mejorado. Y siento orgullo, porque ese crecimiento no nació de la casualidad sino de la intención que ambos hemos tenido de hacer las cosas bien.\n\nNo somos perfectos, pero sí somos conscientes. Y eso hace que lo nuestro sea tan especial y tan real.",
    
    "Me encanta cuando me hablas de tus metas. Hay una mezcla en ti que me parece impresionante. Tienes ternura, disciplina, fuerza y determinación al mismo tiempo. Cada vez que hablas de lo que quieres lograr siento un orgullo enorme.\n\nMe dan ganas de impulsarte, de ayudarte, de verte triunfar en cada cosa que te propongas. Y créeme que voy a estar ahí, apoyándote, celebrando cada logro y acompañándote en cada paso.",
    
    "Hay momentos en los que simplemente veo una foto tuya y no entiendo cómo puede existir una mujer tan hermosa. Y no hablo solo de tu cara, sino de tu forma de mirar, de tu forma de caminar, de la energía que transmites. Tienes algo único que enamora sin intención.\n\nA veces me pongo a pensar en lo afortunado que soy de que seas tú la persona que está conmigo. Siento que la vida me dio un regalo enorme contigo.",
    
    "Recuerdo todas esas noches en las que nos quedamos hablando hasta tarde, sabiendo que al día siguiente teníamos que madrugar. Y aunque después anduviéramos todos cansados, siempre valió la pena. Esas conversaciones largas son de mis favoritas.\n\nA veces profundas, a veces bobas, pero siempre especiales. Siento que en esas madrugadas es donde más conectamos y donde más nos mostramos tal cual somos.",
    
    "Siempre me sorprende tu capacidad de cuidar a los demás. No importa si estás cansada o si tuviste un mal día, tú igual eres capaz de escuchar, apoyar y acompañar. Eso habla de un corazón gigante, de una nobleza que no se aprende, se nace con ella. Es imposible no admirar eso.\n\nMe encanta tu manera de dar cariño y de demostrar amor. Tienes un corazón demasiado hermoso.",
    
    "A veces pienso en ese día en el que nos volvamos a ver después de mucho tiempo separados y me da una emoción demasiado bonita. Me imagino abrazarte fuerte, sentirte cerca, escuchar tu voz, oler tu perfume. Siento que ese momento va a ser de esos que uno recuerda toda la vida.\n\nAunque la distancia pesa, también nos ha enseñado a valorar cada minuto juntos y cada detalle que compartimos.",
    
    "Me encanta cuando cocinamos juntos, incluso cuando algo nos queda mal. Me gusta cuando pruebas la comida y haces esa carita que me mata de la risa. Me encantan esos momentos porque son sencillos, pero están llenos de cariño.\n\nMás allá de la receta, siempre terminamos riéndonos, molestándonos y creando recuerdos que se sienten más importantes que cualquier plato bien hecho.",
    
    "Hay días en los que solo quiero decirte gracias. Gracias por tu paciencia, por tu cariño, por tu manera tan bonita de quererme incluso cuando no soy fácil. Gracias por quedarte cuando las cosas estaban duras, por no rendirte conmigo, por seguir creyendo en esto.\n\nGracias por enseñarme lo que significa amar de verdad, lo que significa construir, lo que significa elegir todos los días. Contigo he aprendido demasiado.",
    
    "Una de las cosas que más disfruto de ti es tu sentido del humor. Puede que no siempre coincidamos en todos los chistes, pero tú tienes una forma única de hacerme reír. A veces con una palabra, otras con una mirada o un comentario raro que solo tú dirías.\n\nAunque tú digas que no eres tan chistosa, te juro que me haces reír más que cualquiera. Contigo la vida se siente más ligera y más bonita.",
    
    "Siento demasiado bonito cuando me demuestras que confías en mí. Cuando me cuentas cosas difíciles, cuando te abres conmigo, cuando compartes sentimientos que no sueles compartir. Eso para mí vale muchísimo. La confianza se construye poco a poco y saber que me la entregas me hace quererte todavía más.\n\nYo siempre voy a cuidar ese espacio seguro que tenemos y siempre voy a ser alguien en quien puedas confiar.",
    
    "Me encanta cuando haces ese gesto con tus ojos cuando algo te emociona. Esa mirada tuya es demasiado única. A veces estoy hablando y te veo hacerlo y al instante siento ternura. Es una expresión tan tuya que sé que podría reconocerla en cualquier lugar.\n\nEsa mirada me enamora cada vez como si fuera la primera.",
    
    "Para terminar estas treinta cartas, solo quiero decirte que cada día contigo me confirma que elegí bien. Elegí a una mujer increíble, fuerte, hermosa, con un corazón inmenso y una esencia que ilumina todo lo que toca. No sé qué venga más adelante, pero sí sé que quiero vivirlo contigo.\n\nTú eres mi lugar favorito, mi persona, mi paz y mi alegría. Gracias por estos nueve meses, gracias por cada día, gracias por existir en mi vida."
  ];

  const isLetterUnlocked = (letterNumber) => {
    const letterDate = new Date(startDate);
    letterDate.setDate(startDate.getDate() + letterNumber - 1);
    letterDate.setHours(0, 0, 0, 0);
    return today >= letterDate;
  };

  const getDaysUntilUnlock = (letterNumber) => {
    const letterDate = new Date(startDate);
    letterDate.setDate(startDate.getDate() + letterNumber - 1);
    letterDate.setHours(0, 0, 0, 0);
    const diffTime = letterDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const openLetter = (letter) => {
    if (isLetterUnlocked(letter.id)) {
      setPageTransition(true);
      setTimeout(() => {
        setSelectedLetter(letter);
        setCurrentView('letter');
        setPageTransition(false);
      }, 300);
    }
  };

  const goToIndex = () => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentView('index');
      setSelectedLetter(null);
      setPageTransition(false);
    }, 300);
  };

  const goToCover = () => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentView('cover');
      setSelectedLetter(null);
      setPageTransition(false);
    }, 300);
  };

  const nextLetter = () => {
    if (selectedLetter && selectedLetter.id < 30) {
      const next = letters[selectedLetter.id];
      if (isLetterUnlocked(next.id)) {
        openLetter(next);
      }
    }
  };

  const prevLetter = () => {
    if (selectedLetter && selectedLetter.id > 1) {
      const prev = letters[selectedLetter.id - 2];
      openLetter(prev);
    }
  };

  // Cover View
  if (currentView === 'cover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4 relative">
        {/* Music toggle button */}
        <button
          onClick={toggleMusic}
          className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:bg-pink-50"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-pink-500" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400" />
          )}
        </button>

        <div className={`max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 ${pageTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-center space-y-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-pink-400 absolute -top-4 -left-4 animate-pulse" />
              <Sparkles className="w-6 h-6 text-red-400 absolute -top-2 -right-2 animate-pulse" style={{animationDelay: '0.5s'}} />
              <Heart className="w-20 h-20 text-red-500 mx-auto animate-pulse" />
            </div>
            
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500" style={{fontFamily: 'cursive'}}>
              Nuestras 30 Cartas
            </h1>
            
            <div className="space-y-2">
              <p className="text-gray-600 italic" style={{fontFamily: 'cursive'}}>
                Para el amor de mi vida
              </p>
              <p className="text-2xl text-red-500 font-bold">💕</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 space-y-3">
              <p className="text-sm text-gray-700" style={{fontFamily: 'cursive'}}>
                9 meses de amor, risas, sueños y complicidad
              </p>
              <p className="text-xs text-gray-500">
                Una carta se desbloquea cada día desde el 27 de noviembre
              </p>
            </div>
            
            <button
              onClick={() => setCurrentView('index')}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:from-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{fontFamily: 'cursive'}}
            >
              <BookOpen className="w-5 h-5" />
              Abrir el Libro
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Index View
  if (currentView === 'index') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4 relative">
        {/* Falling petals */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                fontSize: `${16 + Math.random() * 12}px`,
                animation: `fall ${12 + Math.random() * 8}s linear infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fall {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}</style>

        <div className={`max-w-4xl mx-auto transition-all duration-500 relative z-10 ${pageTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={goToCover}
                className="text-pink-600 hover:text-pink-700 flex items-center gap-2"
                style={{fontFamily: 'cursive'}}
              >
                <ChevronLeft className="w-5 h-5" />
                Atrás
              </button>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500" style={{fontFamily: 'cursive'}}>
                Mis Cartas
              </h2>
              <button
                onClick={toggleMusic}
                className="p-2 rounded-full hover:bg-pink-50 transition-colors"
              >
                {isPlaying ? (
                  <Volume2 className="w-5 h-5 text-pink-500" />
                ) : (
                  <VolumeX className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {letters.map((letter) => {
                const unlocked = isLetterUnlocked(letter.id);
                const daysUntil = getDaysUntilUnlock(letter.id);
                
                return (
                  <button
                    key={letter.id}
                    onClick={() => openLetter(letter)}
                    disabled={!unlocked}
                    className={`relative aspect-square rounded-2xl p-4 transition-all duration-300 ${
                      unlocked
                        ? 'bg-gradient-to-br from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer'
                        : 'bg-gray-200 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-white">
                      {unlocked ? (
                        <>
                          <Heart className="w-6 h-6 mb-2" />
                          <span className="text-2xl font-bold">{letter.id}</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-6 h-6 mb-2 text-gray-500" />
                          <span className="text-sm text-gray-500">{daysUntil}d</span>
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 italic" style={{fontFamily: 'cursive'}}>
              <p>✨ {letters.filter((_, i) => isLetterUnlocked(i + 1)).length} de 30 cartas desbloqueadas ✨</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Letter View
  if (currentView === 'letter' && selectedLetter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4 relative">
        {/* Falling petals */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                fontSize: `${16 + Math.random() * 12}px`,
                animation: `fall ${12 + Math.random() * 8}s linear infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fall {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}</style>

        <div className={`max-w-2xl mx-auto transition-all duration-500 relative z-10 ${pageTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-red-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200 to-red-200 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={goToIndex}
                  className="text-pink-600 hover:text-pink-700 flex items-center gap-2"
                  style={{fontFamily: 'cursive'}}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Índice
                </button>
                <div className="flex items-center gap-2 text-pink-500">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-bold">Carta {selectedLetter.id}</span>
                </div>
                <button
                  onClick={toggleMusic}
                  className="p-2 rounded-full hover:bg-pink-50 transition-colors"
                >
                  {isPlaying ? (
                    <Volume2 className="w-5 h-5 text-pink-500" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-2" style={{fontFamily: 'cursive'}}>
                  {selectedLetter.title}
                </h2>
                <div className="flex items-center justify-center gap-2 text-pink-400">
                  <span className="text-2xl">✨</span>
                  <span className="text-2xl">💕</span>
                  <span className="text-2xl">✨</span>
                </div>
              </div>

              {/* Letter Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify" style={{fontFamily: 'cursive', fontSize: '1.1rem'}}>
                  {letterContents[selectedLetter.id - 1]}
                </p>
              </div>

              {/* Footer with signature */}
              <div className="mt-8 text-right">
                <p className="text-gray-600 italic" style={{fontFamily: 'cursive', fontSize: '1.2rem'}}>
                  Con todo mi amor,
                </p>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 font-bold mt-2" style={{fontFamily: 'cursive'}}>
                  Tu amor 💕
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-pink-200">
                <button
                  onClick={prevLetter}
                  disabled={selectedLetter.id === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    selectedLetter.id === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-pink-600 hover:bg-pink-100'
                  }`}
                  style={{fontFamily: 'cursive'}}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Anterior
                </button>
                <button
                  onClick={nextLetter}
                  disabled={selectedLetter.id === 30 || !isLetterUnlocked(selectedLetter.id + 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    selectedLetter.id === 30 || !isLetterUnlocked(selectedLetter.id + 1)
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-pink-600 hover:bg-pink-100'
                  }`}
                  style={{fontFamily: 'cursive'}}
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LoveLetterBook;
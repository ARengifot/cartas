# 💕 Cartas para mi amorcito - Aplicación Móvil

Una hermosa aplicación móvil con 30 cartas de amor románticas, animaciones elegantes y efectos visuales sorprendentes.

## ✨ Características

- 📖 **Portada elegante** - Con animaciones de corazones y gradientes azul oscuro
- 🔒 **Sistema de desbloqueo** - Las cartas se desbloquean desde el 27 de noviembre, una por día
- 📚 **Índice visual** - Muestra las 30 cartas con candados y días restantes
- 💌 **Lectura romántica** - Tipografía cursiva y decoración hermosa
- 📱 **Diseño responsivo** - Perfecto en iOS y Android
- ✨ **Animaciones avanzadas** - Pétalos cayendo, brillos, transiciones suaves
- 🎨 **Paleta azul oscuro** - Tonos azules sofisticados y modernos
- 🍎 **Pantalla de carga personalizada** - Con logo y animaciones propias

## 🚀 Instalación

### Requisitos previos
- Node.js 16+
- npm o yarn
- Android Studio (para Android)
- Xcode (para iOS)

### Pasos de instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar para web
npm run build

# 3. Agregar plataformas Capacitor
npm run cap:add:ios
npm run cap:add:android

# 4. Sincronizar Capacitor
npm run cap:sync
```

## 📱 Compilación para Android (APK)

### Opción 1: Usando Android Studio (Recomendado)

```bash
# 1. Abrir proyecto en Android Studio
npm run android

# 2. En Android Studio:
# - Build → Build Bundle(s) / APK(s) → Build APK(s)
# - Esperar a que termine la compilación
# - APK estará en: android/app/build/outputs/apk/debug/app-debug.apk
```

### Opción 2: Usando línea de comandos

```bash
# 1. Navegar a la carpeta de Android
cd android

# 2. Compilar APK en modo debug
./gradlew assembleDebug

# 3. El APK estará en:
# app/build/outputs/apk/debug/app-debug.apk

# Para modo release (requiere signing)
./gradlew assembleRelease
```

### Opción 3: Crear APK firmado para Play Store

```bash
# 1. Crear keystroke (primera vez)
keytool -genkey -v -keystore cartas-para-mi-amorcito.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias cartas-key

# 2. En android/app/build.gradle, agregar signingConfigs:
# ... (ver sección de configuración abajo)

# 3. Compilar APK firmado
cd android
./gradlew assembleRelease
```

## 🎨 Personalización

### Cambiar colores
Edita `tailwind.config.js`:
```javascript
colors: {
  primary: '#003d7a',      // Azul oscuro
  secondary: '#4FACFE',    // Azul claro
}
```

### Cambiar nombre de la app
Edita `capacitor.config.ts`:
```typescript
appName: 'Cartas para mi amorcito',
appId: 'com.cartasParaMiAmorcito.app',
```

### Cambiar pantalla de carga
Edita `src/SplashScreen.tsx` con tu imagen o logo personalizado

## 📦 Estructura del proyecto

```
proyecto/
├── src/
│   ├── main.tsx              # Punto de entrada
│   ├── LoveLetterBook.tsx    # Componente principal
│   └── SplashScreen.tsx      # Pantalla de carga
├── index.html                # HTML base
├── vite.config.ts           # Configuración Vite
├── tailwind.config.js       # Configuración Tailwind
├── capacitor.config.ts      # Configuración Capacitor
└── package.json             # Dependencias
```

## 🏃 Comandos disponibles

```bash
npm run dev              # Desarrollar en web (localhost:3000)
npm run build           # Compilar para producción
npm run preview         # Vista previa del build
npm run ios             # Abrir en Xcode
npm run android         # Abrir en Android Studio
npm run cap:sync        # Sincronizar con Capacitor
npm run cap:build:android  # Compilar APK
```

## 📝 Notas importantes

### iOS
- La app requiere iOS 13.0+
- Se crea automáticamente un código de firma
- Puede ser necesario ajustar permisos en Xcode

### Android
- Requiere Android API Level 24+
- La app usa Capacitor 5.5+
- La pantalla de carga se muestra 3 segundos

### Web
- Funciona en cualquier navegador moderno
- Accede desde: `http://localhost:3000`

## 🔐 Consideraciones de seguridad

- La app es completamente offline después del primer load
- No almacena datos personales en servidores
- Las cartas están criptadas localmente
- La fecha de desbloqueo está basada en el reloj del dispositivo

## 📊 Configuración nativa

### Android (android/app/build.gradle)
```gradle
android {
    compileSdkVersion 34
    defaultConfig {
        applicationId "com.cartasParaMiAmorcito.app"
        minSdkVersion 24
        targetSdkVersion 34
    }
}
```

### iOS (ios/App/Podfile)
```ruby
platform :ios, '13.0'
```

## 🤝 Soporte

Si tienes problemas:
1. Verifica que Node.js esté actualizado
2. Elimina `node_modules` y corre `npm install`
3. Ejecuta `npm run cap:sync`
4. Limpia el build: `npm run build && npm run cap:sync`

## 📄 Licencia

Este proyecto es personal y de uso privado.

---

Hecho con ❤️ para el amor de tu vida

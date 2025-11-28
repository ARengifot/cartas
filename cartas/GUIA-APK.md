# 📱 Guía Completa: Generar APK con Capacitor

## 🎯 Objetivo
Crear un APK (archivo de instalación para Android) de la app "Cartas para mi amorcito"

---

## 📋 Requisitos Previos

### Software necesario:
1. **Node.js** (v16+): [descargar](https://nodejs.org)
2. **Android Studio**: [descargar](https://developer.android.com/studio)
3. **Java Development Kit (JDK)**: Se instala con Android Studio
4. **Gradle**: Se instala con Android Studio

### Variables de entorno (importante en Windows):
1. `ANDROID_HOME` → Ruta de Android SDK
2. `JAVA_HOME` → Ruta de Java JDK

---

## 🚀 Pasos para Generar el APK

### Paso 1: Preparar el proyecto

```bash
# Navegar a tu carpeta del proyecto
cd C:\Users\alejo\Downloads

# Instalar dependencias
npm install

# Compilar para producción
npm run build
```

**Resultado esperado:** Se crea carpeta `dist/` con los archivos compilados

---

### Paso 2: Agregar plataforma Android

```bash
# Si aún no has agregado Android
npx cap add android

# Verificar que se creó la carpeta "android"
# Debe existir: C:\Users\alejo\Downloads\android
```

**Resultado esperado:** Se crea carpeta `android/` con el proyecto Gradle

---

### Paso 3: Sincronizar con Capacitor

```bash
# Actualizar archivos Android
npx cap sync android
```

**Esto copia los archivos web compilados a la app Android**

---

### Paso 4: Abrir en Android Studio (Recomendado)

#### Opción A: Desde terminal
```bash
npm run android
```

#### Opción B: Manualmente
1. Abre **Android Studio**
2. Click en `File → Open`
3. Selecciona la carpeta `android/`
4. Espera a que sincronice Gradle (puede tardar minutos)

---

### Paso 5: Compilar el APK

#### MÉTODO 1: Desde Android Studio (MÁS FÁCIL)

1. **Build → Build Bundle(s) / APK(s) → Build APK(s)**

   ![Paso 1](./docs/build-apk-1.png)

2. Espera a que termine (verás una notificación "Build Successful")

3. Click en **"Locate"** en la notificación

4. Se abrirá la carpeta con el APK: `app/build/outputs/apk/debug/app-debug.apk`

#### MÉTODO 2: Desde línea de comandos

```bash
# Navegar a la carpeta Android
cd android

# Compilar debug APK
./gradlew assembleDebug

# El APK estará en:
# app/build/outputs/apk/debug/app-debug.apk
```

#### MÉTODO 3: Para producción (Play Store)

```bash
# Primero, crear un keystore (solo primera vez)
keytool -genkey -v -keystore cartas-para-mi-amorcito.keystore ^
  -keyalg RSA -keysize 2048 -validity 10000 -alias cartas-key

# Luego editar: android/app/build.gradle

# Agregar antes de "android {"
signingConfigs {
    release {
        storeFile file("cartas-para-mi-amorcito.keystore")
        storePassword "TU_PASSWORD"
        keyAlias "cartas-key"
        keyPassword "TU_PASSWORD"
    }
}

# Agregar dentro de "buildTypes { release {"
signingConfig signingConfigs.release

# Finalmente compilar
cd android
./gradlew assembleRelease

# APK estará en: app/build/outputs/apk/release/app-release.apk
```

---

## 📍 Ubicación de los APKs

| Tipo | Ubicación |
|------|-----------|
| Debug | `android/app/build/outputs/apk/debug/app-debug.apk` |
| Release | `android/app/build/outputs/apk/release/app-release.apk` |

---

## 📲 Instalar el APK en un dispositivo

### Opción 1: Desde Android Studio

1. Conecta tu dispositivo Android por USB
2. Habilita "Depuración USB" en Configuración → Opciones de desarrollador
3. En Android Studio: **Run → Run 'app'**
4. Selecciona tu dispositivo
5. ¡Listo! La app se instalará automáticamente

### Opción 2: Transferir el APK

1. Copia `app-debug.apk` a tu PC/Teléfono
2. Transfiere a tu dispositivo Android
3. Abre con gestor de archivos
4. Instala el APK
5. Confirma permisos

### Opción 3: Usar ADB (línea de comandos)

```bash
# Conectar dispositivo
adb devices

# Instalar APK
adb install android/app/build/outputs/apk/debug/app-debug.apk

# Desinstalar si es necesario
adb uninstall com.cartasParaMiAmorcito.app
```

---

## 🐛 Solucionar Problemas

### Problema: "Cannot find Android SDK"
**Solución:**
```bash
# En Windows, establece la variable de entorno
set ANDROID_HOME=C:\Users\[TU_USUARIO]\AppData\Local\Android\sdk

# O edita android\local.properties
# Asegúrate que tenga:
sdk.dir=C:\Users\[TU_USUARIO]\AppData\Local\Android\sdk
```

### Problema: "Gradle sync failed"
**Solución:**
1. En Android Studio: `File → Sync Now`
2. Si persiste: `File → Invalidate Caches → Restart`
3. O regenera el proyecto:
   ```bash
   npx cap sync android
   ```

### Problema: Build falló con errores
**Solución:**
```bash
# Limpia y reconstruye
cd android
./gradlew clean
./gradlew assembleDebug
```

### Problema: "App crashes on startup"
**Solución:**
1. Verifica que `npm run build` se ejecutó correctamente
2. Ejecuta `npx cap sync android`
3. Reconstruye en Android Studio

---

## 📊 Información de la App

- **App ID**: `com.cartasParaMiAmorcito.app`
- **App Name**: "Cartas para mi amorcito"
- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)
- **Versión**: 1.0.0

---

## 🎨 Personalización del APK

### Cambiar icono de la app

1. Prepara una imagen PNG de 512x512px
2. Ve a `android/app/src/main/res/`
3. Reemplaza los archivos en carpetas `mipmap-*`
4. Reconstruye el APK

### Cambiar nombre de la app

En `android/app/build.gradle`:
```gradle
defaultConfig {
    applicationId "com.cartasParaMiAmorcito.app"
    applicationIdSuffix "" // "debug" para versión de prueba
}
```

### Cambiar pantalla de splash

En `android/app/src/main/res/drawable/splash.xml`

---

## 📦 Distribución

### Para Play Store:

1. Crea una cuenta Google Play Developer ($25 USD)
2. Sigue: https://support.google.com/googleplay/android-developer
3. Crea app release con el APK firmado
4. Carga `app-release.apk`
5. ¡Publicar!

### Para distribuir por email/WhatsApp:

1. Comparte el archivo `app-debug.apk`
2. Los destinatarios instalan haciendo click
3. **Nota:** Solo funciona si habilitan "Instalación desde fuentes desconocidas"

---

## ✅ Checklist final

- [ ] Node.js instalado
- [ ] Android Studio instalado  
- [ ] ANDROID_HOME configurado
- [ ] `npm install` ejecutado
- [ ] `npm run build` completado
- [ ] `npx cap add android` ejecutado
- [ ] `npx cap sync` ejecutado
- [ ] APK compilado exitosamente
- [ ] APK instalado en dispositivo
- [ ] App funciona correctamente

---

## 🎬 Video resumen (comandos rápidos)

```bash
# Todo en orden
cd C:\Users\alejo\Downloads
npm install
npm run build
npx cap add android
npx cap sync android
npm run android
# En Android Studio: Build → Build APK(s)
```

---

## 💬 Notas importantes

- La primera compilación tarda más (descarga dependencias)
- Compilaciones posteriores son más rápidas
- Debug APK es más grande pero más rápido
- Release APK es más pequeño pero requiere firma
- La app funciona completamente offline después de compilar

---

**Made with ❤️ para el amor de tu vida**

¿Necesitas ayuda? Revisa los logs en:
- Android Studio: `Build → Make Project`
- Terminal: Último error mostrado en rojo


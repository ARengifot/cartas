# 📋 CHECKLIST DE INSTALACIÓN - Cartas para mi amorcito

## ✅ Pre-requisitos (Completar PRIMERO)

- [ ] **Node.js v16+** instalado
  - Verificar: `node --version` en terminal
  - Descargar: https://nodejs.org

- [ ] **npm** instalado
  - Verificar: `npm --version` en terminal
  - Generalmente viene con Node.js

- [ ] **Android Studio** instalado (para generar APK)
  - Descargar: https://developer.android.com/studio
  - Instalar Android SDK (16GB aprox)

- [ ] **Java JDK** instalado
  - Generalmente viene con Android Studio
  - Si no: https://www.oracle.com/java/technologies/downloads/

---

## 📁 PASO 1: Organizar archivos (5 min)

```
Crear carpeta: C:\Mi_Proyecto\cartas-app\
├── src/
│   ├── LoveLetterBook.tsx          ← Copiar aquí
│   ├── SplashScreen.tsx            ← Copiar aquí
│   └── main.tsx                    ← Copiar aquí
├── index.html                      ← Copiar aquí
├── capacitor.config.ts             ← Copiar aquí
├── package.json                    ← Copiar aquí
├── vite.config.ts                  ← Copiar aquí
├── tailwind.config.js              ← Copiar aquí
├── postcss.config.js               ← Copiar aquí
├── tsconfig.json                   ← Copiar aquí
├── tsconfig.node.json              ← Copiar aquí
└── README.md                       ← Copiar aquí
```

- [ ] Crear carpeta `src/`
- [ ] Copiar archivos TypeScript a `src/`
- [ ] Copiar archivos de configuración a raíz
- [ ] Copiar HTML a raíz

---

## 📦 PASO 2: Instalar dependencias (5-10 min)

```bash
# Abrir terminal/PowerShell en la carpeta del proyecto
cd C:\Mi_Proyecto\cartas-app\

# Instalar todo
npm install
```

- [ ] Terminal abierta en carpeta correcta
- [ ] `npm install` completado SIN ERRORES
- [ ] Carpeta `node_modules/` creada
- [ ] Archivo `package-lock.json` creado

**Si hay errores:**
```bash
# Limpiar y reintentar
rm -r node_modules package-lock.json
npm install
```

---

## 🏗️ PASO 3: Compilar para web (3-5 min)

```bash
# Compilar proyecto
npm run build
```

- [ ] `npm run build` completado sin errores
- [ ] Carpeta `dist/` creada con archivos
- [ ] Archivos en `dist/` incluyen HTML, JS, CSS

**Si hay errores:**
- Revisar que TypeScript y Vite estén instalados
- Ejecutar: `npm install --save-dev vite @vitejs/plugin-react`

---

## 📱 PASO 4: Agregar plataforma Android (2 min)

```bash
# Agregar Android
npx cap add android
```

- [ ] Carpeta `android/` creada
- [ ] `android/app/` existe
- [ ] `android/app/src/main/` existe

**Si falla:**
```bash
# Asegurar que gradle está listo
npx cap add android --force
```

---

## 🔄 PASO 5: Sincronizar Capacitor (2 min)

```bash
# Sincronizar archivos
npx cap sync android
```

- [ ] Comando ejecutado sin errores
- [ ] Archivos web copiados a Android
- [ ] `android/app/src/main/assets/public/` contiene archivos

---

## 🚀 PASO 6: Abrir en Android Studio (1 min)

### Opción A: Terminal
```bash
npm run android
```

### Opción B: Manual
1. Abrir Android Studio
2. Seleccionar `File → Open`
3. Navegar a carpeta `android/`
4. Click `OK`
5. Esperar sincronización Gradle

- [ ] Android Studio abierto
- [ ] Proyecto cargado correctamente
- [ ] No hay errores de Gradle (o están en proceso)

---

## ⏳ PASO 7: Esperar sincronización Gradle

**Esto puede tomar 5-15 minutos en la primera ocasión**

```
Gradle está sincronizando...
Descargando dependencias...
```

- [ ] Notificación "Gradle sync finished" aparece
- [ ] No hay errores críticos (warnings está bien)
- [ ] Barra de progreso desaparece

**Mientras espera:** Continúa con siguiente sección 👇

---

## 🛠️ PASO 8: Configuración opcional de Android

### Si quieres cambiar el nombre/icono (OPCIONAL):

1. Abre `android/app/build.gradle`
2. Localiza:
```gradle
defaultConfig {
    applicationId "com.cartasParaMiAmorcito.app"
    applicationName "Cartas para mi amorcito"
}
```
3. Personaliza según desee

- [ ] (Opcional) Configuración personalizada completada

---

## 📦 PASO 9: Generar el APK

### MÉTODO RECOMENDADO: Android Studio UI

1. Android Studio en pantalla
2. Click en: **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**

   ![Menu Build](./docs/build-menu.png)

3. Esperar notificación "Build successful"
4. Click en **"Locate"** en la notificación

- [ ] Opción Build visible en menú
- [ ] Build iniciado
- [ ] Esperando compilación...

### MÉTODO ALTERNATIVO: Terminal

```bash
cd android
./gradlew assembleDebug
```

- [ ] Comando ejecutado
- [ ] Esperando compilación (~3-5 min)

---

## ✅ PASO 10: Verificar APK compilado

La compilación debe crear el archivo aquí:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

En Windows: `C:\Mi_Proyecto\cartas-app\android\app\build\outputs\apk\debug\app-debug.apk`

- [ ] Carpeta `outputs/` existe
- [ ] Carpeta `apk/debug/` existe  
- [ ] Archivo `app-debug.apk` visible
- [ ] Archivo tiene tamaño > 30MB

**Tamaño esperado:** 50-100 MB

---

## 📱 PASO 11: Instalar en dispositivo (Opcional)

### Opción A: Conectar teléfono
1. Conecta Android por USB
2. Habilita "Depuración USB" en Configuración → Opciones de desarrollador
3. Android Studio detectará tu dispositivo
4. Click en `Run` o presiona `Shift+F10`

- [ ] Teléfono conectado
- [ ] Depuración USB activada
- [ ] Dispositivo aparece en Android Studio
- [ ] App instalándose en teléfono...

### Opción B: Compartir APK
1. Copia `app-debug.apk` a unidad USB
2. Transfiere a teléfono Android
3. Abre con File Manager
4. Click para instalar

- [ ] APK copiado a USB
- [ ] Transferido a teléfono
- [ ] Instalado correctamente

---

## 🎉 ¡ÉXITO! 

Si llegaste aquí sin problemas serios, ¡la app está lista! 

### Lo que sucedió:
1. ✅ Instalaste dependencias
2. ✅ Compilaste para web
3. ✅ Agregaste Android
4. ✅ Generaste APK
5. ✅ (Opcional) Instalaste en teléfono

### ¿Qué sigue?
- Prueba la app
- Comparte el APK con tu pareja
- Publica en Google Play Store (opcional)

---

## 🐛 TROUBLESHOOTING

### Problema: "npm: command not found"
**Solución:** Node.js no está instalado o no está en PATH
```bash
# Reinstala Node desde https://nodejs.org
# Reinicia PowerShell/Terminal
```

### Problema: "Gradle sync failed"
**Solución:**
```bash
# Desde terminal en carpeta project
cd android
./gradlew clean
cd ..
npx cap sync android
```

### Problema: "Build failed"
**Solución:**
```bash
# Limpiar y sincronizar de nuevo
npm run build
npx cap sync android
# Retry en Android Studio
```

### Problema: "Cannot find Android SDK"
**Solución:**
1. En Android Studio: Tools → SDK Manager
2. Instala Platform version 34
3. Cierra y reabre Android Studio

### Problema: "App no inicia"
**Solución:**
```bash
# Verificar que build web está actualizado
npm run build
npx cap sync android
# Reconstruir APK
```

---

## 📞 Ayuda rápida

| Problema | Comando | Resultado |
|----------|---------|-----------|
| Limpiar todo | `rm -r node_modules dist android` | Vuelve a empezar |
| Verificar Node | `node --version` | Debe ser v16+ |
| Verificar npm | `npm --version` | Debe ser v8+ |
| Limpiar proyecto | `npm run build` | Compila web |
| Reinstalar deps | `npm install` | Todas las librerías |
| Sincronizar | `npx cap sync` | Copia archivos |

---

## 📊 Tiempo total esperado

| Paso | Tiempo | Acumulado |
|------|--------|-----------|
| Pre-requisitos | 0-60 min | 0-60 min |
| Organizar archivos | 5 min | 5-65 min |
| npm install | 5-10 min | 10-75 min |
| npm run build | 3-5 min | 13-80 min |
| npx cap add | 2 min | 15-82 min |
| npx cap sync | 2 min | 17-84 min |
| Android Studio | 1 min | 18-85 min |
| Gradle sync | 5-15 min | 23-100 min |
| Build APK | 3-5 min | 26-105 min |
| **TOTAL** | | **26-105 min** |

(Varía según velocidad Internet y PC)

---

## 🎁 Resultado Final

Tendrás:
- ✅ APK funcional
- ✅ App lista para compartir
- ✅ 30 cartas románticas
- ✅ Animaciones hermosas
- ✅ Colores azul personalizado

---

**¡Éxito en tu proyecto! ❤️✨**

Para más ayuda, revisa:
- `README.md` - Guía general
- `GUIA-APK.md` - Detalles técnicos
- `RESUMEN-CAMBIOS.md` - Qué cambió


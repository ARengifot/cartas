@echo off
setlocal enabledelayedexpansion

echo 🎀 Iniciando setup de Cartas para mi amorcito...
echo.

REM Colores usando findstr
set "GREEN=[92m"
set "YELLOW=[93m"
set "RED=[91m"
set "NC=[0m"

REM 1. Instalar dependencias
echo %YELLOW%📦 Instalando dependencias...%NC%
call npm install
if errorlevel 1 (
    echo %RED%❌ Error al instalar dependencias%NC%
    pause
    exit /b 1
)
echo %GREEN%✅ Dependencias instaladas%NC%
echo.

REM 2. Compilar para web
echo %YELLOW%🏗️  Compilando para web...%NC%
call npm run build
if errorlevel 1 (
    echo %RED%❌ Error al compilar%NC%
    pause
    exit /b 1
)
echo %GREEN%✅ Compilación completada%NC%
echo.

REM 3. Agregar plataformas
echo %YELLOW%📱 Agregando plataformas...%NC%
call npx cap add android 2>nul
call npx cap add ios 2>nul
echo %GREEN%✅ Plataformas configuradas%NC%
echo.

REM 4. Sincronizar
echo %YELLOW%🔄 Sincronizando Capacitor...%NC%
call npx cap sync
echo.

echo %GREEN%✅ ¡Setup completado exitosamente!%NC%
echo.
echo %YELLOW%Próximos pasos:%NC%
echo   - Para desarrollar en web: %GREEN%npm run dev%NC%
echo   - Para Android: %GREEN%npm run android%NC%
echo   - Para iOS: %GREEN%npm run ios%NC%
echo   - Para compilar APK: %GREEN%npm run cap:build:android%NC%
echo.
echo Made with ❤️  for your loved one
echo.
pause

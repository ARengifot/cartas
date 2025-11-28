#!/bin/bash

echo "🎀 Iniciando setup de Cartas para mi amorcito..."
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Instalar dependencias
echo "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo "${RED}❌ Error al instalar dependencias${NC}"
    exit 1
fi

echo "${GREEN}✅ Dependencias instaladas${NC}"
echo ""

# 2. Compilar para web
echo "${YELLOW}🏗️  Compilando para web...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo "${RED}❌ Error al compilar${NC}"
    exit 1
fi

echo "${GREEN}✅ Compilación completada${NC}"
echo ""

# 3. Agregar plataformas
echo "${YELLOW}📱 Agregando plataformas...${NC}"
npx cap add android 2>/dev/null || echo "Android ya agregado"
npx cap add ios 2>/dev/null || echo "iOS ya agregado"

echo "${GREEN}✅ Plataformas configuradas${NC}"
echo ""

# 4. Sincronizar
echo "${YELLOW}🔄 Sincronizando Capacitor...${NC}"
npx cap sync

echo ""
echo "${GREEN}✅ ¡Setup completado exitosamente!${NC}"
echo ""
echo "${YELLOW}Próximos pasos:${NC}"
echo "  • Para desarrollar en web: ${GREEN}npm run dev${NC}"
echo "  • Para Android: ${GREEN}npm run android${NC}"
echo "  • Para iOS: ${GREEN}npm run ios${NC}"
echo "  • Para compilar APK: ${GREEN}npm run cap:build:android${NC}"
echo ""
echo "Made with ❤️  for your loved one"

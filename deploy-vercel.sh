#!/bin/bash

# Script para deploy na Vercel
echo "🚀 Iniciando deploy na Vercel..."

# Verifica se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Faz o build do projeto
echo "🏗️ Fazendo build do projeto..."
npm run build

# Deploy na Vercel
echo "🌐 Fazendo deploy na Vercel..."
vercel --prod

echo "✅ Deploy concluído!"
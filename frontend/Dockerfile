# Usar uma imagem do Node.js como base
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de definição de pacote
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o aplicativo usa
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
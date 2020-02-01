FROM node:lts

# Cria o diretório para o app
WORKDIR /usr/src/app

# Copia os arquivos
COPY . .

# Instala as dependencias do projeto 
# e cria os arquivos estáticos para produção
RUN npm install -g serve \
    && npm install \
    && npm run build

# Sobe a aplicação ao criar uma instância em modo interativo
CMD ["serve", "-s", "build"]
# Imagem node LTS v20.17.0
FROM node:20-alpine

RUN apk update && apk upgrade

# Definie o diretório de trabalho no container (cria o diretório caso não exista)
WORKDIR /app

# Copia os arquivos do projeto para a imagem docker
COPY . /app

# Instala as dependências do projeto na imagem
RUN npm install

# Define o comando padrão que o container terá
CMD ["npx", "expo", "start", "-w"]
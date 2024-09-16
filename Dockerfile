# Imagem node LTS v20.17.0
FROM node:20-alpine

RUN apk update && apk upgrade

# Definie o diretório de trabalho no container (cria o diretório caso não exista)
WORKDIR /app

COPY . /app

RUN npm install

# Exponha a porta usada pelo expo para o host (tem que usar a flag -p no DOCKER RUN)
EXPOSE 19000

# Defina o comando padrão do container
CMD ["npx expo start -w"]
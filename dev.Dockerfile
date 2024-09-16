# Use a imagem base do Node.js
FROM node:20-alpine

RUN apk update && apk upgrade && apk add \
    bash \
    bash-completion \
    git

# Definie o diretório de trabalho no container (cria o diretório caso não exista)
WORKDIR /app

# copia os arquivos do projeto imhere para a imagem
COPY . /app

RUN mv .bashrc /root/

# instala as dependências do projeto imhere
RUN npm install

# retorna o bash quando é criado um container com 'docker run'
CMD ["sh", "-c" "sleep", "infinity"]
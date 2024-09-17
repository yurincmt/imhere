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

COPY .bashrc /root/

# instala as dependências do projeto imhere
RUN npm install

# retorna o bash quando é criado um container com 'docker run'
# para rodar o container em background, passe o comando 'sleep inf' para o docker run
CMD ["bash"]
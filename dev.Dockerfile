# Use a imagem base do Node.js
FROM node:20-alpine

RUN apk update && apk upgrade && apk add \
    bash \
    bash-completion \
    git


# Clona o repo dentro da imagem; dessa forma, sempre que for executado um
# 'docker buid' a imagem criada estará com o repo atualizado.
# Porém sempre dê um 'git pull' dentro do container para manter as coisas
# atuaizadas 
RUN git clone https://github.com/yurincmt/imhere.git -b yuri.develop

# Definie o diretório de trabalho no container (cria o diretório caso não exista)
WORKDIR /imhere

# minhas configs do bash para manter o PS1 colorido e ativr o bash-completion
COPY .bashrc /root/

# instala as dependências do projeto imhere
RUN npm install

# retorna o bash quando é criado um container com 'docker run'
# para rodar o container em background, passe o comando 'sleep inf' para o docker run
CMD ["bash"]
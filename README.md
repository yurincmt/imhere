# Gerenciador de Inscrições para Eventos

O presente repositório contém o código-fonte de uma aplicação mobile simples desenvolvida em React Native com Expo (Managed Workflow), cujo objetivo é gerenciar a lista de participantes inscritos para um evento. A interface da aplicação é intuitiva e permite que os usuários adicionem e removam participantes da lista de forma dinâmica.


## Funcionalidades

 - **Adicionar participantes**: Insira o nome de um participante no campo de texto e pressione o botão de adição (+) para incluí-lo na lista de inscritos.

 - **Remover participantes**: Cada participante da lista tem um botão de remoção (-). Ao clicar nele, uma confirmação será exibida para garantir que a remoção seja intencional.

 - **Lista dinâmica de participantes**: A lista é atualizada em tempo real conforme novos participantes são adicionados ou removidos.


## Tecnologias Utilizadas
 - **React Native**: Utilizado para o desenvolvimento da interface mobile.
 - **Expo (Managed Workflow)**: Framework que facilita o desenvolvimento e a execução de aplicações React Native.


## Aplicação em Ação!


## Rodar o Projeto no Host e com Emulador Android (Recomendado)

### Instale o Nodejs LTS 'v20.17.0' na Máquina

Especificamente a versão 'v20.17.0', pois foi usando ela que o app foi desenvolvido e testado!

    # Fedora
    dnf install npm ; npm install -g n ; n install v20.17.0

    # Debian
    apt install npm ; npm install -g n ; n install v20.17.0


### Prepare o Ambiente para Desenvolvimento Android

Siga as recomentações do React Native para o preparo do ambiente para desenvolvimento Android 

[React Native Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)

 - React Native currently recommends `version 17` of the Java SE Development Kit (JDK)
 - Building a React Native app with native code requires the `Android 14 (UpsideDownCake) SDK` in particular. 


### Baixe o Repositório do Projeto na Máquina e vá para seu Diretório
    
    git clone -b yuri.develop https://github.com/yurincmt/imhere.git ; cd imhere


### Instale as dependências da aplicação especificadas em 'package.json'

    npm install


### Rode o projeto e escolha onde deseja renderizá-lo (web, device)

Rode seu *Android Virtual Device* (AVD) pelo Android Studio e verifique se ele está disponível com:

    adb devices

Se tiver tudo ok, rode a aplicação com o comando a seguir e espere ser carregado no emulador.

    npx expo start -a


## Rodar o Projeto em Container e Vizualizar na Web

Rodar uma aplicação mobile em navegador tem suas limitações, visto que nem todas as funcionalidades do mobile será visível no navegador.

    git clone -b yuri.develop https://github.com/yurincmt/imhere.git ; cd imhere

    docker build -f dev.Dockerfile -t imhere:dev .

    docker run --hostname docker-alpine --name imhere_dev -d imhere:dev sleep inf

Após o `docker run`, o container estará rodando em background. Conecte-se ao container com o VScode e rode a aplicação com:

    npx expo start -w

Após isso, a aplicação já pode ser vista no navegador acessando a porta correta (default: 8081)

| Os trabalhos e commits devem ser feitos do repo dentro do container
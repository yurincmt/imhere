## Para rodar o projeto no host e com emulador Android (Recomendado)

### Instale o Nodejs LTS 'v20.17.0' na máquina

Especificamente a versão 'v20.17.0', pois foi usando ela que o app foi desenvolvido e testado!

    # Fedora
    dnf install npm ; npm install -g n ; n install v20.17.0

    # Debian
    apt install npm ; npm install -g n ; n install v20.17.0


### Prepare o ambiente para desenvolvimento Android

Siga as recomentações do React Native para o preparo do ambiente para desenvolvimento Android 

[React Native Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)

 - React Native currently recommends `version 17` of the Java SE Development Kit (JDK)
 - Building a React Native app with native code requires the `Android 14 (UpsideDownCake) SDK` in particular. 


### Baixe o repositório do projeto na máquina e vá para seu diretório
    
    git clone -b yuri.develop https://github.com/yurincmt/imhere.git ; cd imhere


### Instale as dependências da aplicação especificadas em 'package.json'

    npm install


### Rode o projeto e escolha onde deseja renderizá-lo (web, device)

Rode seu *Android Virtual Device* (AVD) pelo Android Studio e verifique se ele está disponível com:

    adb devices

Se tiver tudo ok, rode a aplicação com o comando a seguir e espere ser carregado no emulador.

    npx expo start -a



## Para rodar o projeto em container e vizualizar na web

Rodar uma aplicação mobile em navegador tem suas limitações, visto que nem todas as funcionalidades do mobile será visível no navegador.

    git clone -b yuri.develop https://github.com/yurincmt/imhere.git ; cd imhere

    docker build -f dev.Dockerfile -t imhere:dev .

    docker run --hostname docker-alpine --name imhere_dev -d imhere:dev sleep inf

Após o `docker run`, o container estará rodando em background. Conecte-se ao container com o VScode e rode a aplicação com:

    npx expo start -w

Após isso, a aplicação já pode ser vista no navegador acessando a porta correta (default: 8081)

| Os trabalhos e commits devem ser feitos do repo dentro do container
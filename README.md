## Passos para rodar o projeto em dev

    git clone https://github.com/yurincmt/imhere.git

    cd imhere

    git checkout yuri.develop

    docker build -f dev.Dockerfile -t imhere:dev .

    docker run --hostname docker-alpine --name imhere_dev -d imhere:dev sleep inf

Após o `docker run`, o container estará rodando em background. Conecte-se ao container com o VScode.

| Os trabalhos e commits devem ser feitos do repo container docker 
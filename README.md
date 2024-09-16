## Passos para rodar o projeto

    git clone https://github.com/yurincmt/imhere.git

    cd imhere

    docker build -f nodeLTS.Dockerfile -t imhere .

    docker run --rm -p 19000:19000 -it imhere
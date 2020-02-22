# Github-Front

Front para listagem de repositórios do github, de acordo com a linguagem selecionada.

## Configuração

Copiar o arquivo `.env-example` para `.env`.

### Ambiente local

Rodar:
```
yarn
yarn start
```

Para acessar: `http://localhost:3000`

### Ambiente com Docker

Rodar:
```
docker build . --no-cache -t ruanklein/github-front
docker run --rm --name github-front -p 5000:5000 -itd ruanklein/github-front
```

Para acessar: `http://localhost:5000`

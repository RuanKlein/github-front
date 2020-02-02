# Aplicação de Teste

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
docker build . --no-cache -t ruanklein/testeapp
docker run --rm --name testeapp -p 5000:5000 -itd ruanklein/testeapp
```

Para acessar: `http://localhost:5000`

### Iae galera, Meu nome é Rafael

### Este é o repositório para vaga de node na jaya.

###### Escolhi fazer a api em NestJs que é um framework bem interessante para trabalhar com node e resolveria o problema proposto de forma simples, estudei e fiz a api consultando a documentação, eu não tinha tanto conhecimento prévio do framework, mas mesmo assim resolvi fazer com ele para casar mais com perfil da vaga, do que fazer um dotnet core, de qualquer forma usei meu conhecimento prévio de outras linguagens no geral.
---
###### O nestjs tem a proposta de criar um ambiente modularizado, semelhando até o angular, que é um framework que ele é inspirado.
###### O nest usa o pattern module para organização da aplicação, da mesmo forma do node com os módulos, a diferença é o scaffold que ele gera para o desenvolvedor, o CLI também é bem interessante para gerar os arquivos.

## Tecnologias 

- ######  typescript@3.7
- ######  nestjs/cli@7
- ######  jest@26
- ######  sqlite3@5
- ######  swagger@4.1
- ######  typeorm@0.2

## pontos interessantes
- #####  errorhandler (para padronizar os retornos da api)
- #####  interceptors (para loggar as informações da api)
- #####  documentação com swagger
- #####  teste de unidade 
- #####  teste de integração 

## Organização do projeto
![Organizacao](https://i.imgur.com/PXPyGif.png)

## Link do Heroku com a api rodando
- Link -> https://price-converter-api.herokuapp.com/api/

## Rodar no docker
com docker instalado, entrar na raiz e executar ⇊
```bash
$ docker build -t price-api .

docker run -p 3000:3000 price-api
```

## Instalação na maquina
```bash
#instalar as dependências
$ npm install
# iniciar a aplicação
$ npm run start
# a aplicação deve está disponivel atráves do localhost:3000/api
```

## testes

```bash
#testes de unidade
$ npm run test
#testes de integração
$ npm run test:e2e
#cobertura de testes
$ npm run test:cov
```

### qualquer possível problema, meus contatos ⇊

- tel: 27981027002
- email: rafael.contatotrab@gmail.com
- linkedin: https://www.linkedin.com/in/rafael-hs

# Obrigado!

# Desafio Digital Republic app para calcular latas de tintas

Essa e uma aplicacao simples contendo `JavaScript`, `ReactJS` and `NodeJS + express`.

O BackEnd possui apenas um endpoint, `POST em http://localhost:3001/area` que recebe as informacoes das paredes e calcula a melhor compra possivel e retorna um objeto com as latas de tintas necessarias baseado no volume e rendimento por L em questao.

O FrontEnd, que vai rodar em `http://localhost:3000/`, consiste de duas tabelas e um form onde sao preenchidas as informacoes da paredes mostradas na tabela de paredes, que sao salvas no estado da aplicacao. Ao clicar em calcular, o estado com as informacoes da parede sao passados para o BackEnd que verifica os dados e faz o calculo necessario, retornando a melhor compra possivel que e registrado na tabela de resultados.

O FrontEnd da aplicacao pode ser achado aqui [here](https://gitlab.com/loloopes/codechallenge/-/tree/master/front-end).
O BackEnd da aplicacao pode ser achado aqui [here](https://gitlab.com/loloopes/codechallenge/-/tree/master/back-end).

 ```bash
-back-end   Diretorio BackEnd         
  --controller  Diretorio Controller, onde as requisicoes sao recebidas e passadas ao diretorio service onde serao processadas 
    ---wall   Diretorio onde contem as rotas referentes as paredes, no caso post
      ----post.js 
      ----router.js
    ---router.js
  --middleware    Diretorio onde contem os middlewares que lidam com erro e verifica os dados que chegam do frontend
    ---error.js
    ---wallChecker.js
  --server    Diretorio onde contem o arquivo index, onde esta o servidor
    ---index.js
  --service   Diretorio que comunica com o Controller, e onde todo o processamento de dados ocorre
    ---calcCans.js
-front-end    Diretorio FrontEnd
  --public    Diretorio onde contem o arquivo index html da aplicacao react
    ---index.html
  --src   Diretorio source do react App
    ---components   Diretorio que contem os componentes da aplicacao
    ---images   Diretorio que contem imagens do projeto
    ---pages    Diretorio que contem as paginas da aplicacao
      ---MainPage.jsx 
    ---services   Diretorio onde as informacoes sao agrupadas e enviada ao backend
      ----postData.js
    ---App.js
    ---index.js
 ```

## Requerimentos

- npm ^8.1.0
- node ^16.13.0
- docker ^20.10.7 (opcional)
- docker-compose ^1.25.5 (opcional)

## Instalacao

Comece clonando o repositorio
```bash
git clone git@gitlab.com:loloopes/codechallenge.git
cd codechallenge
```
Apos clonar o repositorio, certifique-se de que pelo menos o npm e o node estejam instalados. A aplicacao pode rodar sem o docker.

```bash
npm --version
node --version
docker --version
docker-compose --version
```

Se necessario, instale NodeJS e NPM

```bash
sudo apt install nodejs
sudo apt install npm
```
Voce pode achar mais sobre como instalar Docker aqui [here](https://docs.docker.com/engine/install/). 
Voce pode achar mais sobre como instalar o Docker-Compose aqui [here](https://docs.docker.com/compose/install/).

## Rodando o Aplicativo

### Docker Compose 

Rode o comando:

```bash
cd codechallenge
docker-compose up
```
Apos entrar com docker-compose up a aplicacao vai estar no ar e pronta para uso em `http://localhost:3000/`.

### Rodando sem o Docker Compose

Instale as dependencias tanto no diretorio front-end quanto back-end, para isso entre os seguintes comandos:

```bash
cd codechallenge
cd back-end
npm install
cd ..
cd front-end
npm install
```
Apos instaladas as dependencias voce devera rodar `npm start` tanto no diretorio back-end quanto front-end para que o aplicativo funcione na sua totalidade.

Depois de iniciado a aplicacao esta pronta para uso em `http://localhost:3000/`.
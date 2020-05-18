# Scraper Bradesco (WIP)

```javascript
npm start
```
Exemplo de Input:
```javascript
{"agencia": "1234",
"conta": "0194044",
"dig": "8",
"token": "12321",
"senha": "0000"}
```

Exemplo de Output:
```javascript
{"day: "12/05/2020",
"story": "Saldo",
"doc": "8",
"credit": "10.00",
"amout: ""}
```

### Problemas enfrentados durante o desenvolvimento pro conta da página do Bradesco
O desenvolvimento está sendo feito com uma conta do tipo conjunta de investimento
porém o bradesco tem dificultado o acesso da obtenção dos dados

A navegação entre iframes torna o sistema inconsistente.

https://canaltech.com.br/juridico/cade-investiga-bradesco-por-dificultar-acesso-a-dados-pelo-guiabolso-138405/

conversa com suporte guia bolso sobre bradesco:
https://photos.app.goo.gl/mpLRTXKvq3csJ7WA6

### TODO para ter um código integrado:
Scrapper.js
- Falta arrumar a forma que o puppeteer utiliza a senha do usuário, hoje tem que colocar diretamente no arquivo para funcionar
- No final tem que alterar a forma que se está obtendo o html do iFrame, o HTML que está sendo obtido não está correto

Parser.js
- O ideal seria agrupar entre um array de trasações por dia, para facilitar o consumo da API no frontend
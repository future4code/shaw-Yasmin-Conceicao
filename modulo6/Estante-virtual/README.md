# 🥇 Case Estante virtual

<h4> Projeto desenvolvido individualmente com base no desafio da Estante virtual, contendo endpoints de Cadastro, login, cadastrar competições, pegar ranking das competições e participantes.</h4>

<br/>

## 📌 Link do Heroku

https://documenter.getpostman.com/view/20353490/VUjLJmYi

<br/>

## 🛠 ferramentas e tecnologias

* Typescript
* Mysql
* Poo
* Uuid
* Jwt
* Bcryptjs

<br/>

## ⚙️ Funcionalidades

### Cadastro

Para fazer um cadastro é necessário passar informações de name, email e password, Contendo tratamento de erros para caso o usuário esqueça de passar alguma informação obrigatória, como, o email deve conter um "@" e ser unico e a senha deve conter no minímo 6 caracteres. A senha do usuário é automaticamente criptografada, e ao finalizar o cadastro é retornado uma mensagem de sucesso juntamente com um token de autorização, o token tem durabilidade de apenas 1h.

#

### Login

Para logar um usuário é preciso passar informações de email e password, contendo novamente tratamentos de erros para o email e senha. A verificação é feita através do email cadastrado anteriormente, ou seja, foi desenvolvido uma lógica para que seja verificado se o email existe no cadastro, e a senha do usuário é comparada através do Hash compare, para que seja verificado se a senha está correta. E ao concluir o login é retornado uma mensage de sucesso seguido do token do usuário.

#

### Cadastrar competição 

Para cadastrar uma competição é necessário estar logado e passar informações de competition, athlete, value e unity. Contendo novos tratamnetos de erros como o value da requisição deve ser maior que 0 e a unidade de tempo "unity"
deve ser de segundos (s) ou minutos (m). E ao finalizar a requisição é retornado uma mensagem de sucesso.

#

### Pegar o ranking de natação

Para pegar o ranking da competição de natação é necessário passar na query da requisição as informações de "classified" e a colocação de cada competidor, ou seja, 
"quarterfinal", "semifinal", "final" e "winner". Na quarterfinal é retornado os 8 melhores, semifinal é retornado os 4 melhores, final é retornado os 2 melhores e na winner é retornado o ganhador.

#

### Pegar o ranking de Corrida

Para pegar o ranking da competição de corrida é necessário passar na query da requisição as informações de "classified" e a colocação de cada competidor, ou seja, 
"quarterfinal", "semifinal", "final" e "winner". Na quarterfinal é retornado os 8 melhores, semifinal é retornado os 4 melhores, final é retornado os 2 melhores e na winner é retornado o ganhador.

# 

### Pegar o ranking de Dardos

Para pegar o ranking da competição de Dardos é necessário passar na query da requisição as informações de "classified" e a colocação de cada competidor, ou seja, 
"quarterfinal", "semifinal", "final" e "winner". Na quarterfinal é retornado os 8 melhores, semifinal é retornado os 4 melhores, final é retornado os 2 melhores e na winner é retornado o ganhador.

#

### Pegar todos os ranking

Para pegar todos os rankings de cada competição é preciso passar na query na requisição as informações de Classified e competition, ou seja,  Classified são as informações de "quarterfinal", "semifinal", "final" e winner,
e competition são as informações das competições existentes como "Natação", "Corrida" e "Dardos".

#

### Funcionalidade extras

* Sistema de autenticação com jwt
* Criptografia de senha com sistema de Hash


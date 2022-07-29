# 🛒 Case Amaro

<h4>Projeto desenvolvido individualmente baseado no desafio da Amaro, contendo endpoints de cadastro, login, inserção de dados e consulta de produtos.</h4>

<br/>

## 📌 link do heroku

em breve

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

Para cadastrar um usuário é necessário passar informações de name, email e password. Contendo tratamento de erros como, criptografia de senha do usuário, o email deve
ser único e caso o usuário esqueça de passar algo na requisição é retornado uma mensagem de erro para cada um dos requesitos necessários, cada usuário tem seu próprio id
que foi gerado pela biblioteca de uuid. E ao finalizar o cadastro é retornado uma mensagem de sucesso juntamente com um token de autorização, o token tem durabilidade de
apenas 1h.


#

### Login

Para logar um usuário é preciso passar informações de email e password. Contendo novamente alguns tratamentos de erros para caso o usuário digite algo inválido, a verificação
é feita através do email cadastrado anteriormente, ou seja, foi desenvolvido uma lógica para que seja verificado se o email existe no cadastro. E ao concluir o login é retornado
uma mensage de sucesso seguido do token do usuário.


#


### Inserção de dados

 Para inserir dados na requisição é necessário estar logado e passar informações de name e tags. Contendo novos tratamentos para que a requisição seja de fácil entendimento,
 e ao finalizar é retornado uma mensagem de sucesso.
 
 #
 
 ### Consulta de produtos
 
  A requisição de consulta pode ser feita atráves do id do usuário pelo name ou tag do produto, e para ter acesso a essa consulta é necessário estar logado. Contendo novamente
  tratamento de erros. Ao finalizar é retornado o produto pela qual foi pesquisado.
  
  #
  
  ### Funcionalidade extras

 * Sistema de autenticação com jwt
 * Criptografia de senha com sistema de Hash
 

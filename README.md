Essa aplicação trata-se de um cadastro de talkers (palestrantes) sendo possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso desenvolvi uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.

Requisito 1 >> Endpoint GET /talker
Retornar o status 200 e um array com todas as pessoas palestrantes cadastradas.
Caso não exista nenhuma pessoa palestrante cadastrada a requisição retorna o status 200 e um array vazio.

Requisito 2 >> Endpoint GET /talker/:id
Retornar o status 200 e uma pessoa palestrante com base no id da rota.
Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição retorna o status 404 com o seguinte corpo:
{
  "message": "Pessoa palestrante não encontrada"
}

Requisito 3 >> Endpoint POST /login
O endpoint recebe no corpo da requisição os campos email e password no seguinte formato:
{
  "email": "email@email.com",
  "password": "123456"
}
e retorna um código de status 200 com o token aleatório de 16 caracteres no seguinte corpo:
{
  "token": "7mqaVRXJSp886CGr"
}
O endpoint deve retornar um token aleatório a cada vez que for acessado.
Este token será utilizado pelas requisições dos próximos requisitos do projeto.

Requisito 4 >> Validações para o endpoint /login
Os campos recebidos pela requisição são validados aqui e, caso os valores sejam inválidos, o endpoint retorna o código de status 400 com a respectiva mensagem de erro ao invés do token.
As regras de validação são:
    o campo email é obrigatório;
    o campo email deve ter um email válido;
    o campo password é obrigatório;
    o campo password deve ter pelo menos 6 caracteres.

Requisito 5 >> Endpoint POST /talker
Esse endpoint adiciona uma nova pessoa palestrante ao seu arquivo;
O corpo da requisição deve ter o seguinte formato:
{
  "name": "Franciele da Silva",
  "age": 33,
  "talk": {
    "watchedAt": "29/12/2019",
    "rate": 5
  }
}
A requisição deve ter o token de autenticação nos headers, no campo authorization.
Caso o token não seja encontrado é retornado um código de status 401, com o seguinte corpo:
    {
      "message": "Token não encontrado"
    }
Caso o token seja inválido retorne um código de status 401, com o seguinte corpo:
{
  "message": "Token inválido"
}

O campo name deve ter no mínimo 3 caracteres. Ele é obrigatório.
O campo age deve ser um inteiro e apenas pessoas maiores de idade (pelo menos 18 anos) podem ser cadastradas. Ele é obrigatório.
O campo talk deverá ser um objeto com as chaves watchedAt e rate. WatchedAt e rate são obrigatórios.
A chave watchedAt deve ser uma data no formato dd/mm/aaaa.
A chave rate deve ser um inteiro entre 1 e 5.
O endpoint retorna o status 201 e a pessoa palestrante que foi cadastrada, da seguinte forma:
{
  "id": 1,
  "name": "Franciele da Silva",
  "age": 33,
  "talk": {
    "watchedAt": "29/12/2019",
    "rate": 5
  }
}

Requisito 6 >> Endpoint PUT /talker/:id
Esse endpoint é capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
A requisição deve ter o token de autenticação nos headers, no campo authorization.
Caso o token não seja encontrado retorna um código de status 401.
Caso o token seja inválido retorna um código de status 401.
O campo name deverá ter no mínimo 3 caracteres. Ele é obrigatório.
O campo age deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos 18 anos) podem ser cadastradas. Ele é obrigatório.
O campo talk deverá ser um objeto com as chaves watchedAt e rate (ambos são obrigatórios):
A chave watchedAt deve ser uma data no formato dd/mm/aaaa.
A chave rate deve ser um inteiro entre 1 e 5.
Caso esteja tudo certo, retorna o status 200 e a pessoa editada.

Requisito 7 >> Endpoint DELETE /talker/:id
Esse endpoint deleta uma pessoa palestrante com base no id da rota. Retornando o status 204, sem conteúdo na resposta.
A requisição deve ter o token de autenticação nos headers, no campo authorization.
Caso o token não seja encontrado retorna um código de status 401.
Caso o token seja inválido retorna um código de status 401.

Requisito 8 >> Endpoint GET /talker/search e o parâmetro de consulta q=searchTerm
Esse endpoint retorna um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam q da URL. Devendo retornar o status 200.
A requisição deve ter o token de autenticação nos headers, no campo authorization.
Caso o token não seja encontrado retorna um código de status 401.
Caso o token seja inválido retorna um código de status 401.
Caso searchTerm não seja informado ou esteja vazio, o endpoint retorna um array com todas as pessoas palestrantes cadastradas, assim como no endpoint GET /talker, com um status 200.
Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint retorna o status 200 e um array vazio.


    






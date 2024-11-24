Esra aplicação trata-se de um cadastro de talkers (palestrantes) sendo possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso desenvolvi uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.

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

Requisito 5 >> Endpoint POST /talker]
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

Requisito 6 >>

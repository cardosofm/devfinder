const express = require("express");

const app = express();

//por padrão express não entende o json
//então é ncessário configurar o express para entender json com a linha abaixo
app.use(express.json());

//Métodos HTTP: GET, POST, PUT, DELETE
//Tipos de Params:
//Query: request.query [GET] (Fazer filtros, ordenação, paginação, usando Query params. Todos Query Params ficam visíveis na url)
//Route: request.params (Identificar um recuros na alteração, remoção)
//Body: request.body (Put, Post). Quando vamos criar ou alterar dados usamos o corpo, sempre usando Json.

//

app.post('/', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Relação de Usuários'});
});

app.listen(3636);


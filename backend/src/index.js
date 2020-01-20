const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//conexão com mongodb, detalhe que vai dar alguns warnings, para resolver, pode colocar
// alguns parametros depois da string de conexão
// useNewUrlParser: true, useUnifiedTopology: true,
// verificar porta do mongo com o portquiz.net:27017
mongoose.connect('mongodb+srv://fernando:Fer$mdb83@cluster0-xdemk.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//por padrão express não entende o json
//então é ncessário configurar o express para entender json com a linha abaixo
app.use(express.json());

app.use(routes);

app.listen(3636);


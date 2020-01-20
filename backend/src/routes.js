const { Router } = require('express');
const axios = require('axios');
const routes = Router();
const Dev = require('./models/Dev');
const DevController = require('../src/controllers/DevController');
const SearchController = require('../src/controllers/SearchController');

//Métodos HTTP: GET, POST, PUT, DELETE
//Tipos de Params:
//Query: request.query [GET] (Fazer filtros, ordenação, paginação, usando Query params. Todos Query Params ficam visíveis na url)
//Route: request.params (Identificar um recuros na alteração, remoção)
//Body: request.body (Put, Post). Quando vamos criar ou alterar dados usamos o corpo, sempre usando Json.

//lembrar de instalar o mongose, lib para dar acesso ao mongodb dentro do node.js
//lembrar de instalar o Axios, para chamas de APIs

// usando o asyc pois pode demorar
routes.post('/caddevs', DevController.store);
routes.get('/consdevs', DevController.index);

routes.get('/search', SearchController.index);

module.exports = routes;
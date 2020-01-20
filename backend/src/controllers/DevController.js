const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// geralmente um controller tem 5 funções:
// store, show, index, update, destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()
        
        return response.json(devs);
    },

    async store(request, response) {
        //console.log(request.body);
        const { github_username, techs, longitude, latitude } = request.body;

        //codigo para verificar se ja existe usário cadastrado no banco de dados
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            // await para aguardar o get funcionar para ai sim continuar o resto do código 
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            // aqui nesse caso se não existir o name ele retorna o login, é um if reduzido
            const { name = login, avatar_url, bio } = apiResponse.data;

            // receber um array da API
            //const techsArray = techs.split(",").map(techs => techs.trim());
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };


            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }



        //console.log(dev);
        return response.json(dev);
    },

    async update() {

    },

    async destroy() {

    },
}
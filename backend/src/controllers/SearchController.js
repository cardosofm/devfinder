const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");

//const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index (request, response) {
        // buscar todos devs num raio 10km
        // filtrar devs por techs   
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
         
        });

        return response.json({
            devs
        })


    }
}
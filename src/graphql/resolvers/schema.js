const getCharacters = require('../../controllers/getApiRick');

const resolvers = {
    Query: {
        
        characters: async () => {
            const response=await getCharacters();
            //console.log(response);
            return response.characters;
        },
        episodes:async ()=>{
            const response=await getCharacters();
            console.log(response.episodes);
            return response.episodes;
        }
    },
};

module.exports = resolvers;

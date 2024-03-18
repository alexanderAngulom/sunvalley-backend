const getCharacters = require('../../controllers/getApiRick');

const resolvers = {
    Query: {
        
        characters: async () => {
            const response=await getCharacters();
            console.log(response);
            return response.characters;
        },
    },
};

module.exports = resolvers;

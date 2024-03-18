const axios = require('axios');

const getCharacters = async () => {
    try {
        const query = `
        query {
            episodes{
                results{
                  name,
                  episode
                }
              }
              ,
            characters {
              info {
                count
              }
              results {
                name,
                id,
                status,
                image,
                location{
                  name
                },
                origin{
                  name
                }
              }
              
            }
            
          }
        `;

        const response = await axios.post('https://rickandmortyapi.com/graphql', { query });
        // console.log("aaaaaa",response.data.data.characters.results);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw new Error('Failed to fetch characters from external API');
    }
};

module.exports = getCharacters;

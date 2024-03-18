// Configuración de Swagger

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const constantes= require('./constants')
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: constantes.API_VERSION,
      description: 'Documentation for my API'
    }
  },
  apis: ['./src/routes/*.js'] // Rutas donde se encuentran los endpoints
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };

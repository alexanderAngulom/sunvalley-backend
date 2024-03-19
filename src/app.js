const restRoutes = require('./routes/restRoutes');
const graphqlRoutes = require('./routes/graphqlRoutes');
const { swaggerUi, specs } = require('./utils/swagger');

const { app } = require('./config/server'); 

// Middleware para las rutas de la API REST
app.use('/api', restRoutes);

// Middleware para las rutas de GraphQL
app.use('/graphql', graphqlRoutes);

// Middleware para Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

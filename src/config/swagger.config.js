const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app){
    const swaggerDoc = swaggerJsDoc({
        swaggerDefinition: {
            info: {
                title: 'BazaarBoard API Documentation', 
                version: '1.0.0', 
                description: 'API documentation for the BazaarBoard marketplace application.', 
                contact: {
                    name: 'Amirhossein',
                    email: 'amirholyanasabnarab@gmail.com',
                },
            },
            servers: [
                {
                    url: 'http://localhost:3000', // Local server URL
                    description: 'Development server',
                },
            ],
        },
        apis: []
    });

    const swagger = swaggerUi.setup(swaggerDoc);
    app.use("/", swaggerUi.serve, swagger);
};

module.exports = swaggerConfig;

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Expresso API',
        version: '1.0.0',
        description: 'API documentation for the Expresso app',
    },
    tags: [
        {
            name: 'Heroes',
            description: 'Operations related to heroes',
        },
        {
            name: 'Villains',
            description: 'Operations related to villains',
        },
        {
            name: 'Auth',
            description: 'Operations related to Authentication',
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            BearerAuth: [],
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/**/*.ts'], // Path to your route files for Swagger docs
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };

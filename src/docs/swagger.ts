import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.3',
    info: {
        title: 'SisGest API',
        version: '1.0.0',
    },
    components: {
        schemas: {
            Employee: {
                type: 'object',
            },
        },
    },
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);

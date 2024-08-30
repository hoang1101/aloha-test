const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = [
    './routes/v1/index.js'
];

swaggerAutogen(outputFile, endpointFiles);

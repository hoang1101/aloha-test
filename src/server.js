// src/server.js
import express from 'express';
import db from './models';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
const swaggerFile = require('../swagger_output.json')



require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Thiết lập Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Blog API',
      version: 'v1'
    }
  },
  apis: ['./routes/v1/*.js']
}
// eslint-disable-next-line no-console, no-unused-vars
const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))


const initRouter = require('./routes/v1')
initRouter(app)
// Endpoint kiểm tra
app.use('/testserver', (req, res) => {
  res.status(200).json({
    status: 'success',
    msg: 'HELLO',
  });
});


// Kết nối cơ sở dữ liệu
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL database:', process.env.DB_NAME);
  })
  .catch((err) => {
    console.error('Unable to connect to SQL database:', err);
  });

// Đồng bộ hóa cơ sở dữ liệu và khởi động server
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to SQL database:', err);
  });
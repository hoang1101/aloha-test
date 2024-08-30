const db = require('./models')

import express from 'express'

require('dotenv').config()


const app = express()

app.use('/testserver', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'HELLO'
  })
})
const initRouter = require('./routes/v1')
initRouter(app)

db.sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to SQL database:', process.env.DB_NAME)
    // return db.sequelize.sync({ force: true }); // { alter: true }
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to SQL database:', err, process.env.DB_NAME)
  })


db.sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      // eslint-disable-next-line no-console
      console.error('Created table in MYSQL:', process.env.DB_NAME)
      // eslint-disable-next-line no-console
      console.log(`Hello Broo, Wellcome connected at server http://localhost:${process.env.PORT}`)
    })
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to SQL database:', err, process.env.DB_NAME)
  })



const apiRouter = require('./exampleRoute')


const initRouter = (app) => {


    app.use('/api/v1/', apiRouter)

}

module.exports = initRouter

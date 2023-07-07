const gameRouter = require('./gameRouter')

function Routes(app) {
    app.use('/api/v1/game', gameRouter)
    app.use('/', (req, res) => {
        res.json("hello")
    })
}
module.exports = Routes;

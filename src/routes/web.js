const siteRoute = require('./siteRoute')
const newsRoute = require('./newsRoute')

function route(app){
    app.use('/', siteRoute)
    app.use('/news', newsRoute)
}

module.exports = route;
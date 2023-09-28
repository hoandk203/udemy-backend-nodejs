require('dotenv').config()
const express = require("express");
const configViewEngine = require('./config/viewEngine')
const route = require('./routes/web')
const connection = require('./config/connectFB')

const app = express();

const port = process.env.PORT || 8888;

// template engine,   static files
configViewEngine(app)

// route
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

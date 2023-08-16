const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet')
const cors = require('cors');
const Routes = require('./routes');
const cookieParser = require('cookie-parser');

//middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())

//database

//router
Routes(app)

//handle errors

module.exports = app

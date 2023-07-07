const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const Routes = require('./router')
const cors = require('cors')

const app = express()
const port = 8080
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

Routes(app)

app.listen(port, () => {
    console.log(`app listen on http://localhost:${port}`);
})
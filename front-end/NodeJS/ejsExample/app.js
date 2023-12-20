const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = {
        name: 'HuuDong',
        pets: [
            'dog', 'cat', 'bird'
        ]
    }

    res.status(200).render('main', data)
})

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})
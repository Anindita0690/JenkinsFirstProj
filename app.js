const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => res.send('Hello Anindita! Trying out Webhook !!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

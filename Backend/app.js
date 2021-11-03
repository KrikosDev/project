require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

// app.use(express.json({ extended: true }))
app.use(cors());
app.use(bodyParser.json());
app.use('/user', require('./src/modules/routes/user-routes'))
app.use('/reception', require('./src/modules/routes/reception-routes'))

const PORT = process.env.PORT;

async function start() {
    try {
        mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          app.listen(PORT, () => console.log(`${PORT} start`))
    } catch {
        console.log('Server Error');
    }
}

start()
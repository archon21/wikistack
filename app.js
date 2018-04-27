// Require modules
const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express()

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'false'}))

// Set Static Path
// app.use(express.static(path.join(__dirname,'/stylesheets/style.css')))

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.send('Hello World)
})

const PORT = 3000
app.listen(PORT);
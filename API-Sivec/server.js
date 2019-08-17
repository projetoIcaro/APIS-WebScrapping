const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use("/api", require('./src/routes'))

app.listen(3008, () => {
    console.log("Compass SP - API Sivec- iniciada na porta 3008");
});



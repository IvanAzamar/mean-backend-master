const express = require('express');
const conectarDB = require('./config/db');
var bodyParser = require('body-parser');
var cors = require("cors");
// Creamos el servidor
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Conectamos a la BD
conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})
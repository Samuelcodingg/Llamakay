//Importando librerías
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//Declaración del servidor
const app = express();

//Configuración sensible usada
require('dotenv').config();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Conexión de BD
mongoose.connect(process.env.DATABASE).then(() => { console.log('DB connection successfull') });

//Rutas setup
app.use('/api/auth', require('./routes/auth'));
app.use('/api/anuncio', require('./routes/anuncio'));

//Corren en el puerto
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
})
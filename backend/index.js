//Importando librerías
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//Declaración del servidor
const app = express();

//para desahibilitar posibilidad de saber el back desde el front
app.disable('x-powered-by');

//Configuración sensible usada
require('dotenv').config();
const corsOptions = {
    origin: process.env.FRONT_URL,
    optionsSuccessStatus: 200,
};

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

//Conexión de BD
mongoose.connect(process.env.DATABASE).then(() => { console.log('DB connection successfull') });

//Rutas setup
app.use('/api/auth', require('./routes/auth'));
app.use('/api/anuncios', require('./routes/anuncio'));

//Corren en el puerto
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
})
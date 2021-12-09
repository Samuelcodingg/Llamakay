const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

const anuncioSchema = new mongoose.Schema(
    {
        monto_pago: {
            type: Number,
            required: true
        },
        mes_experiencia: {
            type: Number,
            required: true
        },
        des_puesto: {
            type: String,
            required: true
        },
        fecha_inicio: {
            type: Date,
            required: true
        },
        fecha_fin: {
            type: Date,
            required: true
        },
        estado: {
            type: Boolean,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        requisitos: {
            type: String,
            required: true
        },
        funciones: {
            type: String,
            required: true
        },
        id_empresa: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Empresa',
            required: true
        },
        postulantes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Alumno'
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Anuncio', anuncioSchema);
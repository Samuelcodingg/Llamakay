const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

const anuncioSchema = new mongoose.Schema(
    {
        monto_pago: {
            type: Number
        },
        mes_experiencia: {
            type: Number
        },
        des_puesto: {
            type: String
        },
        fecha_inicio: {
            type: Date
        },
        fecha_fin: {
            type: Date
        },
        estado: {
            type: Boolean
        },
        titulo: {
            type: String
        },
        requisitos: {
            type: String
        },
        funciones: {
            type: String
        },
        id_empresa: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Empresa',
            required: true
        },
        postulantes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Alumno'
        },
        fecha_publicacion: {
            type: Date,
            default: Date.now
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Anuncio', anuncioSchema);
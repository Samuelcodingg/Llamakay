const mongoose = require('mongoose');

const anuncioSchema = new mongoose.Schema(
    {
        nro_participantes: {
            type: Number,
            required: true
        },
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
        cargo: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Anuncio', anuncioSchema);
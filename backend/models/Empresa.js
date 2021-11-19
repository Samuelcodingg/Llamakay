const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const empresaSchema = new mongoose.Schema({
    nc_empresa: {
        type: String,
        trim: true,
        maxlength: 80,
    },
    rs_empresa: {
        type: String,
        trim: true,
        maxlength: 80,
    },
    ruc_empresa: {
        type: String,
        trim: true,
        maxlength: 11,
    },
    direccion_empresa: {
        type: String,
        trim: true,
        maxlength: 11,
    },
    nrocol_empresa: {
        type: Number,
        trim: true,
        maxlength: 45,
    },
    psw_empresa: {
        type: String,
        required: true
    },
    salt: String,
    web_empresa: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    correo: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        maxlength: 50
    },
    cel_empresa: {
        type: Number,
        trim: true,
        maxlength: 9
    },
    des_empresa: {
        type: String,
        trim: true,   
        maxlength: 500   
    },
    pais: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    departamento: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    distrito: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    rubro: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    tipo_usuario: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    photo: {
        data: Buffer,
        contentType: String
    }
},
    {timestamps: true}
);

empresaSchema.virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.psw_empresa = this.encryptPassword(password);
    })
    .get(function(){
        return this._password;
    })

empresaSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.psw_empresa;
    },
    encryptPassword: function(password) {
        if(!password) return '';
        try {
            console.log('encriptando ga');
            return crypto.createHmac('sha1',this.salt)
                .update(password)
                .digest('hex')
        }
        catch(err) {
            return "";
        }
    }
    
}

module.exports = mongoose.model('Empresa', empresaSchema);
const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const alumnoSchema = new mongoose.Schema({
        nom_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
            required: true
        },
        app_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
            required: true
        },
        apm_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
            required: true
        },
        correo_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
            unique: true,
            required: true
        },
        direccion_alumno: {
            type: String,
            trim: true,
            maxlength: 80,
            required: true
        },
        cel_alumno: {
            type: Number,
            trim: true,
            maxlength: 9
        },
        dni_alumno: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 8
        },
        psw_alumno: {
            type: String,
            required: true
        },
        salt: String,
        descripcion_alumno: {
            type: String,
            trim: true,   
            maxlength: 500  
        },
        github_link: {
            type: String,
            trim: true,   
            maxlength: 500  
        },
        linkedin: {
            type: String,
            trim: true,   
            maxlength: 500  
        },
        universidad: {
            type: String,
            trim: true,   
            maxlength: 50  
        },
        facultad: {
            type: String,
            trim: true,   
            maxlength: 50  
        },
        escuela: {
            type: String,
            trim: true,   
            maxlength: 50  
        }
    },
    {timestamps: true}
)

alumnoSchema.virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.psw_alumno = this.encryptPassword(password);
    })
    .get(function(){
        return this._password;
    })

alumnoSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.psw_alumno;
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

module.exports = mongoose.model('Alumno', alumnoSchema);
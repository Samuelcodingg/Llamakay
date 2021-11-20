const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const alumnoSchema = new mongoose.Schema({
        nombre: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        app_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        apm_alumno: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        correo: {
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
        },
        cel_alumno: {
            type: Number,
            trim: true,
            maxlength: 9
        },
        dni_alumno: {
            type: Number,
            trim: true,
            maxlength: 8
        },
        psw_alumno: {
            type: String,
            required: true
        },
        salt: String,
        descripcion: {
            type: String,
            trim: true,   
            default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        genero: {
            type: Number,
            trim: true,
            maxlength: 1
        },
        pais: {
            type: String,
            trim: true,
            maxlength: 50
        },
        departamento: {
            type: String,
            trim: true,
            maxlength: 50
        },
        distrito: {
            type: String,
            trim: true,
            maxlength: 50
        },
        formacion: {
            type: Array,
            default: [],
        },
        idiomas: {
            type: Array,
            default: [],
        },
        conocimientos: {
            type: Array,
            default: [],
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
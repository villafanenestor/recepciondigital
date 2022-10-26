const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
    nombre: {type :String, 
        required : [true, 'El nombre es obligatorio'],
    },
    email: {
        type : String,
        required : [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type : String,
        required : [true, 'La Contrasela es obligatoria'],
    },
    img: {
        type : String,
    },
    rol: {
        type : String,
        required: true,
        enum : ['ADMIN_ROLE', 'USER_ROLE',]
    },
    estado: {
        type : Boolean,
        default : true,
    },
    google: {
        type : Boolean,
        default : false,
    },
});



usuarioSchema.methods.toJSON = function (){
    const {__v, password, _id, ... usuario} = this.toObject();
    usuario.uid= _id;
    return usuario;
}



module.exports = model('Usuario', usuarioSchema);
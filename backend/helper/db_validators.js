const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol='')=>{
    const existeROl = await Role.findOne({rol});
    console.log('ROL CONSULTADO:',rol);
    if( !existeROl ){
        throw new Error('ROL NO ENCONTRADO');
    }
}

const existeEmail = async( email='')=>{
    const emailYaRegistrado = await Usuario.findOne({email});
    if(emailYaRegistrado){
        throw new Error('Email ya registrado');
    }
}

const existeUsuarioByID = async( id='')=>{
    const existeUsuario = await Usuario.findById({id});
    console.log('Existeusuario?:',existeUsuario);
    if(!existeUsuario){
        throw new Error('no hay ningun usuario creado con el id');
    }
}

module.exports ={
    esRoleValido,
    existeEmail,
    existeUsuarioByID,
}
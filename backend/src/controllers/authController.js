const { request, response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const generarJWT = require('../helper/generarjwt');


const login = async ( req = request, res = response )=>{
    const {email, password} =req.body;
    try {

        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                msg: 'correo no existe'
                
            });
        }

        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario deshabilitado, por favor comunicarse con administracion'
            });
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            });
        } 


        const {nombreU} = usuario.nombre;
        const {emailU } = usuario.password;

        const token = await generarJWT( usuario.id ); 
        res.json({
            usuario,
            "tokenInformation":{
                token,
                "expiration": '24h'
            }
        });
        
    } catch (error) {
        console.log('Error al iniciar sesion.');
        res.status(500).json({
        error
        });

    }
    
}

module.exports = {
    login,
}
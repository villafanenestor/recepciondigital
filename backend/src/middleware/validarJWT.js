const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');



const validarJWT = async( req = request, res = response, next)=>{
    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            msg:"no hay token"});
    }
    try {
        const secret = process.env.SECRETJWT;
        const {uid} = jwt.verify(token, secret);
        // console.log(payload);
        
        req.uid = uid;

        const usuario = await Usuario.findById(uid);
        if( !usuario ){
            return res.status(401).json({msg: "Usuario no existe"
        }); 
        }
        if( !usuario.estado ){
            return res.status(401).json({msg: "No se puede realizar esta operacion, ya que su usuario esta eliminado"
        });
        }


        req.usuarioAuth = usuario;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        });
        
    }
}

module.exports = validarJWT;
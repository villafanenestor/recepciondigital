const { response, request } = require('express');
const jwt = require('jsonwebtoken');



const validarJWT = ( req = request, res = response, next)=>{
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
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        });
        
    }
}

module.exports = validarJWT;
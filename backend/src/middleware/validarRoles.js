const { request, response } = require("express")

const esAdminRole= ( req=request, res=response, next)=>{

    const usuarioAuth = req.usuarioAuth;
    if( !usuarioAuth){
        return res.status(500).json({
            msg: "Se quiere validar el role sin validar el token."
        });
    }
    
    const {rol, nombre} = usuarioAuth;

    if( rol!=='ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es administrador`

        });
    }
    next();
}

module.exports={
    esAdminRole
}
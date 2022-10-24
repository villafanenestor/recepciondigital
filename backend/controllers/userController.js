const {response, request} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');



const  userGet = async (req= request , res=response)=> {
    const {limit=50, desde=0} = req.query; 
    
    
    const query = { estado: true};
    
    // Codigo no optimi porque la segunda peticion no se resuelva hasta que la primera no sea completada
    // const usuarios = await Usuario.find({estado: true})
    // .skip(Number( desde ))
    // .limit(Number( limit ));

    // const total = Usuario.countDocuments();

    const [usuarios, total] = await Promise.all(
        [
            Usuario.find(query)
            .skip(Number( desde ))
            .limit(Number( limit )),
            Usuario.countDocuments(query),
        ]
    );
    
    res.json({
        usuarios, total
    });
};




const  userPost =  async(req= request , res=response)=> {
    // const userService = new UserService();

    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});
    const salt= await bcryptjs.genSalt();
    usuario.password = bcryptjs.hashSync( usuario.password );
    
    const existEmail = await Usuario.findOne({email});
    if(existEmail){
        return res.status(400).json({msg:"Email ya registrado"});
    }
    await usuario.save();
    res.status(201).json({
        msg: "Hello POST",
        usuario
        });
};

const  userPut = async (req= request , res=response)=> {
    console.log('Meotod de actualizar');
    const id = req.params.id;
    const {password, google, email, ...resto} = req.body;

    if( password ){
        const salt= await bcryptjs.genSalt();
        resto.password = bcryptjs.hashSync( password, salt );

    }
    const usuario = await Usuario.findByIdAndUpdate( id, resto);

    res.json(`Hello Put`)
};

const  userDelete = async(req= request , res=response)=> {
    console.log('Eliminacion');
    const id = req.params.id;
    await Usuario.findByIdAndUpdate(id, {estado: false});
    res.status(204).send();
};


module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut

}
// const Usuario = require('../models/usuario');
// const bcryptjs = require('bcryptjs');


// class UserService{

//     constructor(){
//         this.salt =bcryptjs.genSalt();

//     }


//     async crearUsuario(usuario){
//         // console.log(usuario.password, 'FInal');
        
//         try {
//             const {nombre, email, password, rol} = usuario;
//             await this.__esUsuarioValido(usuario).then(
//             esValido =>{
//                 console.log(esValido);
//                 console.log('Contraseña antes:', usuario.password);
//             }).then(
//                 ()=>{
//                     usuario.password = bcryptjs.hashSync(usuario.password), this.salt;
//                     console.log('Contraseña despues:', usuario.password);
//                 });
//         } catch (error) {
//             console.log(error);
//             throw {
//                 status: '400',
//                 msg: err,
//         }

        

//     }


//     async __esUsuarioValido(nombre, password, email, rol){
//         // return  Promise ( async(resolve, reject)=>{
//         //     const user =  await this.__validarUsuario(nombre, password, email, rol);
//         //     console.log("Valor final usuario:", user);
//         //     ( user ) ? resolve( user ) : reject( err );
//         // });
//         try {
//             usuarioValido=await this.__validarUsuario(nombre, password, email, rol); 
//             console.log("Es usuario valido=", usuarioValido);
//             return  usuarioValido;
            
//         } catch (error) {
//             throw error;
//         }

//     }

//     __validarUsuario({nombre, password, email, rol}){
//         if(nombre === undefined || nombre===''){
//             throw "Usuario vacio";
//             return false;
//         }else if(password === undefined || password == null || password=="" ){
//             throw 'Contraseña vacia';
//             return false;
//         }else if(email === undefined){
//             throw 'Contraseña vacia';
//             return false;
//         }else if((!rol === "ADMIN_ROLE") ||  (!rol === "USER_ROLE")){
//             throw 'ROL NO VALIDO';
//             return false;
//         }

//         return true;

//     }


// }


// module.exports = UserService;
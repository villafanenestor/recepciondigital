const {Router} = require('express');
const { check } = require('express-validator');

const router = Router();

const {userGet, userDelete, userPost, userPut} = require('../controllers/userController');

const { validarCampos } = require('../middleware/validarCampos');
const { esRoleValido, existeEmail, existeUsuarioByID } = require('../helper/db_validators');


router.post('/login', ){

}

module.exports ={
   router 
}
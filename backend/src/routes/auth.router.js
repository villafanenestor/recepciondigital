const {Router} = require('express');
const { check } = require('express-validator');

const router = Router();

const {userGet, userDelete, userPost, userPut} = require('../controllers/userController');

const { validarCampos } = require('../middleware/validarCampos');
const { esRoleValido, existeEmail, existeUsuarioByID } = require('../helper/db_validators');
const { login } = require('../controllers/authController');


router.post('/login', 
[
    check('email', 'Se debe enviar un email valido').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),

    validarCampos,
],
login);

module.exports = router;
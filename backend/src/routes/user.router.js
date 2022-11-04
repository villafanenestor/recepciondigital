const {Router} = require('express');
const { check } = require('express-validator');

const router = Router();

const {userGet, userDelete, userPost, userPut} = require('../controllers/userController');

const { validarCampos } = require('../middleware/validarCampos');
const { esRoleValido, existeEmail, existeUsuarioByID } = require('../helper/db_validators');
const validarJWT = require('../middleware/validarJWT');
const { esAdminRole } = require('../middleware/validarRoles');


router.get('/', userGet);
router.post('/',
[
    check('email', 'Email no valido').isEmail(),
    check('email').custom( (email)=>existeEmail(email)),
    check('nombre', 'El nombre no puede estar vacio').notEmpty(),
    check('password', 'password debe tener 8 caracteres minimos').isLength({min:8, max:32}),
    check('password', 'password inseguro').isStrongPassword(), 
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( (rol)=>esRoleValido(rol)),
    // En caso de que falle alguna validacion se ejecutara el la siguiente funcion
    validarCampos, 
],
userPost);

router.put('/:id',
[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( (id)=>existeUsuarioByID(id) ),
    check('nombre', "nombre no puede estar vacio").notEmpty(),
    check('email', 'Email no valido').isEmail(),
    check('email').custom( (email)=>existeEmail(email)),
    check('rol').custom( (rol)=>esRoleValido(rol)),
    validarCampos
],
userPut);
router.delete('/:id',
[   
    validarJWT,
    // esAdminRole,
    check('id', 'No es un ID valido').isMongoId(),
    // check('id').custom( (id)=>existeUsuarioByID(id) ),
    validarCampos,
],
 userDelete);



module.exports = router;
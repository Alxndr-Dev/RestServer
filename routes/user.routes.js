const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const {getUsers, 
    postUsers, 
    putUsers, 
    patchUsers,
    deleteUsers} = require('../controllers/user.controller');
const { validarCampos } = require('../middlewares/validar-campos');



router.get('/', getUsers);

router.post('/', [
    check('correo', 'El correo no es valido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
    check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
] ,postUsers);

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);


module.exports = router;
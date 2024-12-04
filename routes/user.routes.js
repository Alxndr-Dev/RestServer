//Dependencies
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

//Controllers
const {getUsers, 
    postUsers, 
    putUsers, 
    patchUsers,
    deleteUsers} = require('../controllers/user.controller');

//Middlewares
const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, existeEmail } = require('../helpers/db-validators');



//ROUTES

//GET
router.get('/', getUsers);

//POST
router.post('/', [
    //Middlewares
    //Check is a middleware that validates the request
    //In this case, we are validating the request body
    //The first parameter is the name of the field
    //The second parameter is the error message
    //The third parameter is the validation
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom( existeEmail ),
    //The not().isEmpty() method is used to check if the field is empty or not
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //The isLength() method is used to check the length of the field
    check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
    // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    //Custom validation
    //This is a custom validation that checks if the role is valid
    //In this case we retrieve the role from the request body
    check('role').custom( esRolValido ),
    validarCampos
] ,postUsers);

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);

//Exporting the router
module.exports = router;
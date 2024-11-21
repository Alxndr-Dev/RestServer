const { Router } = require('express');
const router = Router();

const {getUsers, 
    postUsers, 
    putUsers, 
    patchUsers,
    deleteUsers} = require('../controllers/user.controller');


router.get('/', getUsers);

router.post('/', postUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);


module.exports = router;
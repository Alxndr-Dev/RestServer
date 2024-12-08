//Import Bcrypt for encrypt passwords
const bcrypt = require('bcryptjs');
//Imports User model
const User = require('../models/user');


// Rest API - Controller
//GetUsers
const getUsers = async (req, res) => {

    // const { q, nombre = 'No name', apikey, page = '1', limit } = req.query;

    const users = await User.find();

    res.json({
        users
    });
}

//PostUsers
const postUsers = async (req, res) => {

    //Getting the body
    const {nombre, correo, password, role} = req.body;
    //New User
    const user = new User({nombre, correo, password, role});

    //Encrypting the password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password,salt);

    //Saving the user
    await user.save();

    res.status(201).json({
        user
    });
}

//PutUsers
const putUsers = async (req, res) => {

    const id = req.params.id;
    const {_id, password, google, correo, ...resto} = req.body;

    //TODO: validate against database
    if( password ){
        //Encrypting the password
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password,salt);
    }

    const usuario = await User.findByIdAndUpdate(id, resto);

    res.status(200).json( usuario );
}

//PatchUsers
const patchUsers = (req, res) => {
    
    res.json({
        msg: 'patch API - controller'
    });
}

//DeleteUsers
const deleteUsers = (req, res) => {

    res.json({
        msg: 'delete API - controller'
    });
}

//Exports
module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
};
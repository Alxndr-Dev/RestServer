//Import Bcrypt for encrypt passwords
const bcrypt = require('bcryptjs');
//Imports User model
const User = require('../models/user');


// Rest API - Controller
//GetUsers
const getUsers = (req, res) => {

    const { q, nombre = 'No name', apikey, page = '1', limit } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

//PostUsers
const postUsers = async (req, res) => {



    //Getting the body
    const {nombre, correo, password, role} = req.body;
    //New User
    const user = new User({nombre, correo, password, role});

    //verifying if the email exists
    //Search email
    const existeEmail = await User.findOne({correo});
    if (existeEmail){
        return res.status(400).json({
            msg: 'The email already exists'
        })
    }

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
const putUsers = (req, res) => {

    const id = req.params.id;

    res.status(200).json({
        msg: 'put API - controller',
        id
    });
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
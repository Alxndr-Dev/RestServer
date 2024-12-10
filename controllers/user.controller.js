//Import Bcrypt for encrypt passwords
const bcrypt = require('bcryptjs');
//Imports User model
const User = require('../models/user');


// Rest API - Controller
//GetUsers
const getUsers = async (req, res) => {

    //Query params
    //We get the limit and from from the query
    const { limit = 5, from = 0} = req.query
    const query = { estado: true };

    const [total, users] = await Promise.all([
        User.countDocuments(), //We get the total of users
        User.find( query ) //We get all the users with estado true
            .skip(Number(from)) //We skip the first 'from' users
            .limit(Number(limit)) //We get the first 'limit' users
    ]);

    res.json({
        total,
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
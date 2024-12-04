const Role = require('../models/role');
const User = require('../models/user');

const esRolValido = async (role = '') =>{
    //We check if the role exist in the roles in the db
    const existeRol = await Role.findOne({role});
    //If not exist, throw the error
    if(!existeRol){
        throw new Error(`El rol ${role} no esta registrado en la Base de datos`);
    }
}


//verifying if the email exists
//Search email
const existeEmail = async (correo ='')=>{
    const correoExiste = await User.findOne({correo});
    if (correoExiste){
        throw new Error(`El correo ${correo} ya esta registrado`);
    }}

module.exports = {
    esRolValido,
    existeEmail
}
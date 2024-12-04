const Role = require('../models/role');

const esRolValido = async (role = '') =>{
    //We check if the role exist in the roles in the db
    const existeRol = await Role.findOne({role});
    //If not exist, throw the error
    if(!existeRol){
        throw new Error(`El rol ${role} no esta registrado en la Base de datos`);
    }
}


module.exports = {
    esRolValido
}
//Importing the express validator
const { validationResult } = require('express-validator');

//We validate if exist any error, if not exist, "next"
const validarCampos = (req, res, next) =>{

    //Validation result save all the errors comming from the req
    const errors = validationResult(req);
    //If not empty, show the errors
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();
}

//EXPORTS
module.exports = {
    validarCampos
}
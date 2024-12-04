
//Import the required modules and create a new schema for the user model. The schema will have the following fields:
//Schema and model from mongoose
const {Schema, model} = require('mongoose');

//User schema with the required fields
const UserSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contrasena es obligatoria'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

UserSchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();
    return user;
}

//Export the user model with the schema
module.exports = model('User', UserSchema);
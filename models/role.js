//Import the required modules and create a new schema for the role model. The schema will have the following fields:
const { Schema, model } = require('mongoose');

//Role schema with the required fields
const RoleSchema = Schema({

    role: {
        type: String,
        required: [true, 'El Rol es obligatorio']
    }

})

//Export the role model with the schema
module.exports = model('Role', RoleSchema);
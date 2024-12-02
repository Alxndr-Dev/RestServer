//Importing Mongoose
const mongoose = require('mongoose');

//Connection to DB
const dbConnection = async ()=>{

    try {

        //Connecting using ENV key
        await mongoose.connect(process.env.MONGODB_CNN)

        console.log('Base de datos online');
        
    } catch (error) {
        //Show the errors
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }



}

//EXPORTS
module.exports = {
    dbConnection
}
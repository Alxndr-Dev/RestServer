//Server class to start the server and connect to the database
const express = require('express');
//Importing the cors module to allow requests from other domains
var cors = require('cors');
//Importing the database connection function
const { dbConnection } = require('../database/config');
//Server class
class Server {

    //Constructor method
    constructor(){
        //Loading the environment variables
        //Creating an instance of the express module
        this.app = express();
        //Setting the port
        this.port = process.env.PORT || 3000;
        //Setting the user path
        this.userPath = '/api/users';

        //Database connection
        this.dbConnect();
    

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    //Database connection
    async dbConnect(){
        //Calling the database connection function
        await dbConnection();
    }

    //Middlewares
    middlewares(){

        //Public directory
        //This is the directory where the public files are stored (images, css, js, etc)
        this.app.use(express.static('public'));

        //CORS
        //This middleware is used to allow requests from other domains
        this.app.use(cors());

        //Body parse
        //This middleware is used to parse the request body and convert it to a JSON object
        this.app.use(express.json());

    }

    //Routes
    routes(){
        
        //User routes
        //This is the path where the user routes are stored (login, register, etc)
        this.app.use(this.userPath, require('../routes/user.routes'));

    }

    //Listen
    //This method is used to start the server
    listen(){
        //Starting the server
        this.app.listen(this.port, ()=>{
            //Printing a message to the console
            console.log(`Server running on port ${this.port}`)
        }); 
    }

}

//Exporting the Server class
module.exports = Server;
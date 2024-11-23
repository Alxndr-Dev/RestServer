const express = require('express');
var cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){

        //Public directory
        this.app.use(express.static('public'));

        //CORS
        this.app.use(cors());

        //Body parse
        this.app.use(express.json());

    }

    //Routes
    routes(){
        
        //User routes
        this.app.use(this.userPath, require('../routes/user.routes'));

    }

    //Listen
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`)
        }); 
    }

}







module.exports = Server;
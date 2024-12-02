//Importing the server class and starting the server
//Importing the dotenv module to use the environment variables
require('dotenv').config();
const Server = require('./models/server');

//Creating an instance of the server class and starting the server
const server = new Server();

//Starting the server
server.listen();


const express = require('express')
const cors = require('cors')
const http = require('http')
const socket_io = require('socket.io');
const socketController = require('../sockets/controller.js')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.server = http.createServer(this.app)
        this.io = socket_io(this.server)

    

        this.middlewares()

        this.routes()

        this.sockets()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        
    }

    sockets(){

        this.io.on('connection', socketController);

    }
    
    
    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
        
        
    }

}

module.exports = Server
const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config');


class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        //Middlewares
        this.middlewares();
        this.routes();



        // routers path

        this.userControllerPath = '/api/usuario';
    }

    async conectarDB(){
        await dbConection();
    }

    routes(){

        this.app.get('/', (req, res)=> {
            res.j('Hello World')
          });



        this.app.get('/api', (req, res)=> {
            res.json(req);
          });
        this.app.post('/api', (req, res)=> {
        res.json('{informacion');
        });
        this.app.put('/api', (req, res)=> {
        res.json('{informacion');
        });
        this.app.delete('/api', (req, res)=> {
        res.json('{informacion');
        });
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`url: http://localhost:${this.port}/`)
        });
    }


    middlewares(){
        // Cors
        this.app.use(cors());

        // lectura y parceo de body
        this.app.use(express.json());
        this.app.use( '/api/usuarios', require('../routes/user.router'));
        // Archivos estaticos
        this.app.use(express.static('public'));
    }
}


module.exports = Server;
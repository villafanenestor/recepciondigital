const Server = require('./models/server')

require('dotenv').config()

const server = new Server();

// Server
server.listen();


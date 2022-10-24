const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_ATLAS;

const dbConection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS);
        console.log("Bases de datos conectada");
    } catch (error) {
        throw new Error('Error al conectarse a la base de datos');
    }

}


module.exports = {
    dbConection
}
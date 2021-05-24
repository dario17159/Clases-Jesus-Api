import { Sequelize } from "sequelize";
                        //dbName, userDb, passDb
const db = new Sequelize('test', 'root', '', {
    host: 'localhost', // host de la base de datos o la ip donde se encuentra dada por http o el numero de ip
    dialect: 'mysql', // dialecto que usa la base de datos 

});

export default db;
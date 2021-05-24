
import { DataTypes } from 'sequelize';
import db from "../db/connection";

const Usuario = db.define('Usuario',{
    nombre:{
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    }
});

export default Usuario;
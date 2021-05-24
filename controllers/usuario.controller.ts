import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import Usuario from "../models/usuario.model";

export const getUsuario = async (req: Request, res: Response) => {

    const usuarios = await Usuario.sequelize?.query('SELECT * FROM `usuario`', { type: QueryTypes.SELECT });
    res.json(usuarios)
}

export const postUsuario = async (req: Request, res: Response) => {
    // const {id} = req.params;
    const { body } = req;

    const queryInsert = "INSERT INTO `usuario` (`id`, `nombre`, `apellido`) VALUES (NULL, '" + body.nombre + "', '" + body.apellido + "')";
    const userInsert = await Usuario.sequelize?.query(queryInsert, { type: QueryTypes.INSERT });

    res.json({
        msg: 'PostUsuario',
        userInsert
        // id
    })
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.sequelize?.query("SELECT * FROM `usuario` WHERE id='"+id+"'", { type: QueryTypes.SELECT });
    res.json(usuario)
}
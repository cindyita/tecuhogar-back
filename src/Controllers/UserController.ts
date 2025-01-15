import { Request, Response } from 'express';
import * as UserModel from '../Models/UserModel';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener', error });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = req.body;
        await UserModel.createUser(newUser);
        res.status(201).json({ mensaje: 'Creado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear', error });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;
        await UserModel.updateUser(parseInt(id), data);
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar', error });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await UserModel.deleteUser(parseInt(id));
        res.json({ mensaje: 'Eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error });
    }
};

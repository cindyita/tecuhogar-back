import { Request, Response } from 'express';
import * as HomeModel from '../Models/HomeModel';

export const getHomes = async (req: Request, res: Response): Promise<void> => {
    try {
        const resModel = await HomeModel.getAllHomes();
        res.json(resModel);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener', error });
    }
};

export const createHome = async (req: Request, res: Response): Promise<void> => {
    try {
        const resModel = req.body;
        await HomeModel.createHome(resModel);
        res.status(201).json({ mensaje: 'Creado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear', error });
    }
};

export const updateHome = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;
        await HomeModel.updateHome(parseInt(id), data);
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar', error });
    }
};

export const deleteHome = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await HomeModel.deleteHome(parseInt(id));
        res.json({ mensaje: 'Eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error });
    }
};

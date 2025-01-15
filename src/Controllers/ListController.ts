import { Request, Response } from 'express';
import * as ListModel from '../Models/ListModel';

export const getLists = async (req: Request, res: Response): Promise<void> => {
    try {
        const resModel = await ListModel.getAllLists();
        res.json(resModel);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener', error });
    }
};

export const createList = async (req: Request, res: Response): Promise<void> => {
    try {
        const resModel = req.body;
        await ListModel.createList(resModel);
        res.status(201).json({ mensaje: 'Creado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear', error });
    }
};

export const updateList = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;
        await ListModel.updateList(parseInt(id), data);
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar', error });
    }
};

export const deleteList = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await ListModel.deleteList(parseInt(id));
        res.json({ mensaje: 'Eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error });
    }
};

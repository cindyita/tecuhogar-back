import { getAll, create, update, remove } from './QueryModel';

const table = 'REG_LIST';

interface List {
    id: number;
    title: string;
    description: string;
    status: number;
    id_home: number;
    id_user_create: number;
    id_user_update: number;
    timestamp_create: string;
    timestamp_update: string;
}

export const getAllLists = async () => getAll<List>(table);

export const createList = async (usuario: Omit<List, 'id'>) => create(table, usuario);

export const updateList = async (id: number, datos: Partial<List>) => update(table, id, datos);

export const deleteList = async (id: number) => remove(table, id);
import { getAll, create, update, remove } from './QueryModel';

const table = 'REG_HOME';

interface Home {
    id: number;
    name: string;
    status: number;
    timestamp_create: string;
    timestamp_update: string;
}

export const getAllHomes = async () => getAll<Home>(table);

export const createHome = async (usuario: Omit<Home, 'id'>) => create(table, usuario);

export const updateHome = async (id: number, datos: Partial<Home>) => update(table, id, datos);

export const deleteHome = async (id: number) => remove(table, id);
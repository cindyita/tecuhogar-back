import { getAll, create, update, remove } from './QueryModel';

const table = 'SYS_USER';

interface User {
    id: number;
    username: string;
    email: string;
    name: string;
    last_name: string;
    old: number;
    id_rol: number;
    id_home: number;
    timestamp_create: string;
    timestamp_update: string;
}

export const getAllUsers = async () => getAll<User>(table);

export const createUser = async (usuario: Omit<User, 'id'>) => create(table, usuario);

export const updateUser = async (id: number, datos: Partial<User>) => update(table, id, datos);

export const deleteUser = async (id: number) => remove(table, id);
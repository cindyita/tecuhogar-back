import { conn } from '../Services/DatabaseService';

export const getAll = async <T>(table: string): Promise<T[]> => {
    const [rows] = await conn.query<any>(`SELECT * FROM ${table}`);
    return rows;
};

export const create = async (table: string, data: Record<string, any>): Promise<void> => {
    const keys = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);

    await conn.query(`INSERT INTO ${table} (${keys}) VALUES (${placeholders})`, values);
};

export const update = async (table: string, id: number, data: Record<string, any>): Promise<void> => {
    const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(data), id];

    await conn.query(`UPDATE ${table} SET ${updates} WHERE id = ?`, values);
};

export const remove = async (table: string, id: number): Promise<void> => {
    await conn.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
};

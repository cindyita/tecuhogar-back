"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getAll = void 0;
const DatabaseService_1 = require("../Services/DatabaseService");
const getAll = (table) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield DatabaseService_1.conn.query(`SELECT * FROM ${table}`);
    return rows;
});
exports.getAll = getAll;
const create = (table, data) => __awaiter(void 0, void 0, void 0, function* () {
    const keys = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    yield DatabaseService_1.conn.query(`INSERT INTO ${table} (${keys}) VALUES (${placeholders})`, values);
});
exports.create = create;
const update = (table, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(data), id];
    yield DatabaseService_1.conn.query(`UPDATE ${table} SET ${updates} WHERE id = ?`, values);
});
exports.update = update;
const remove = (table, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield DatabaseService_1.conn.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
});
exports.remove = remove;

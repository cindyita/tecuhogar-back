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
exports.deleteList = exports.updateList = exports.createList = exports.getAllLists = void 0;
const QueryModel_1 = require("./QueryModel");
const table = 'REG_LIST';
const getAllLists = () => __awaiter(void 0, void 0, void 0, function* () { return (0, QueryModel_1.getAll)(table); });
exports.getAllLists = getAllLists;
const createList = (usuario) => __awaiter(void 0, void 0, void 0, function* () { return (0, QueryModel_1.create)(table, usuario); });
exports.createList = createList;
const updateList = (id, datos) => __awaiter(void 0, void 0, void 0, function* () { return (0, QueryModel_1.update)(table, id, datos); });
exports.updateList = updateList;
const deleteList = (id) => __awaiter(void 0, void 0, void 0, function* () { return (0, QueryModel_1.remove)(table, id); });
exports.deleteList = deleteList;

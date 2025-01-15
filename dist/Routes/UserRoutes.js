"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../Controllers/UserController");
const router = (0, express_1.Router)();
router.get('/getusers', UserController_1.getUsers);
router.post('/createuser', UserController_1.createUser);
router.put('/updateuser/:id', UserController_1.updateUser);
router.delete('/deleteuser/:id', UserController_1.deleteUser);
exports.default = router;
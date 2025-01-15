import { Router } from 'express';
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from '../Controllers/UserController';

const router = Router();

router.get('/getusers', getUsers);
router.post('/createuser', createUser);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

export default router;

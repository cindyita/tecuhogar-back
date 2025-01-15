import { Router } from 'express';
import {
    getHomes,
    createHome,
    updateHome,
    deleteHome,
} from '../Controllers/HomeController';

const router = Router();

router.get('/getHomes', getHomes);
router.post('/createHome', createHome);
router.put('/updateHome/:id', updateHome);
router.delete('/deleteHome/:id', deleteHome);

export default router;
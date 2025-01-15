import { Router } from 'express';
import {
    getLists,
    createList,
    updateList,
    deleteList,
} from '../Controllers/ListController';

const router = Router();

router.get('/getlists', getLists);
router.post('/createlist', createList);
router.put('/updatelist/:id', updateList);
router.delete('/deletelist/:id', deleteList);

export default router;

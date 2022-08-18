import { Router } from 'express';
import { getDeposits, addDeposit, deleteDeposit } from '../services/deposits';

const router = Router();

router.post('/deposits/list', (req, res) => getDeposits(req, res));
router.post('/deposits/add', (req, res) => addDeposit(req, res));
router.delete('/deposits/delete', (req, res) => deleteDeposit(req, res));

export default router;

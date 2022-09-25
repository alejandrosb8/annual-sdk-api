import { Router } from 'express';
import { getDeposits, addDeposit, deleteDeposit, updateDeposit } from '../services/deposits';

const router = Router();

router.post('/deposits/list', (req, res) => getDeposits(req, res));
router.post('/deposits/add', (req, res) => addDeposit(req, res));
router.post('/deposits/delete', (req, res) => deleteDeposit(req, res));
router.post('/deposits/update', (req, res) => updateDeposit(req, res));

export default router;

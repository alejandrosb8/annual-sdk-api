import { Router } from 'express';
import { getToken } from '../services/login';

const router = Router();

router.post('/login', (req, res) => getToken(req, res));

export default router;

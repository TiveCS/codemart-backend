import { Router } from 'express';
import { AuthRouter } from './auth/router';

export const router: Router = Router();

router.use('/auth', AuthRouter);

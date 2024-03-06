import express from 'express';
import { user } from '../middlewares/user';

const router = express.Router();

router.get('/api/users/user', user, (req, res) => {
  res.send({ user: req.user || null });
});

export { router as userRouter };

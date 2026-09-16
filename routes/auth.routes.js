import { Router } from 'express'
const authRouter = Router();
authRouter.post('/sign-up', (req, res) => res.send({ tittle: 'sign up' }));
authRouter.post('/sign-in', (req, res) => res.send({ tittle: 'sign in' }));
authRouter.post('/sign-out', (req, res) => res.send({ tittle: 'sign out' }));

export default authRouter;
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/users', (req, res) => res.send({ tittle: 'GET all users' }));

userRouter.get('/:id', (req, res) => res.send({ tittle: 'GET user details' }));

userRouter.post('/', (req, res) => res.send({ tittle: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ tittle: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.send({ tittle: 'DELETE user' }));

export default userRouter;
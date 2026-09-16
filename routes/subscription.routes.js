import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=> res.send({tittle: 'GET all subscriptions'}));

subscriptionRouter.get('/:id', (req,res)=> res.send({tittle: 'GET subscription details'}));

subscriptionRouter.post('/', (req,res)=> res.send({tittle: 'CREATE subscription'}));

subscriptionRouter.put('/:id', (req,res)=> res.send({tittle: 'UPDATE subscription'}));

subscriptionRouter.get('/user/:id', (req,res)=> res.send({tittle: 'GET all user subscriptions'}));

subscriptionRouter.put('/:id/cancel', (req,res)=> res.send({tittle: 'CANCEL subscription'}));

subscriptionRouter.put('/:id/cancel', (req,res)=> res.send({tittle: 'CANCEL subscription'}));

subscriptionRouter.get('/upcoming-renewals', (req,res)=> res.send({tittle: 'GET upcoming renewals'}));


export default subscriptionRouter;
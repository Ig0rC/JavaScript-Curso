import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*
 import express from 'express';

 const router = express.Router();
 console.log(router);

 import { Router } from 'express';

 const router = Router();

 export default router;

*/

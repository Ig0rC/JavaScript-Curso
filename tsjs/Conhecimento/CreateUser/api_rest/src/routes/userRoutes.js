import express from 'express';
import userController from '../controllers/UserController';

const router = express.Router();

router.post('/create', userController.create);
router.get('/', userController.index);
router.get('/search/:id', userController.show);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

export default router;

/*
  index -> lista todos os usuários - get
  store/create -> cria um novo usuários - post
  delete -> apaga um usuario - delete
  show -> mostra um usuário - get
  udpate -> atuaaliza o usuario - put
*/

import model from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newAluno = await model.create({
      nome: 'Maria Clara',
      sobrenome: 'awadwa',
      email: 'igcs@gmail.com',
      idade: 21,
      peso: 90,
      altura: 2.5,
    });
    res.json(newAluno);
  }
}

export default new HomeController();

import model from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await model.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allUser = await model.findAll();
      res.json(allUser);
    } catch (error) {
      res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const searchUser = await model.findByPk(id);
      res.json(searchUser);
    } catch (error) {
      res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await model.findByPk(id);

      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      const newData = await user.update(req.body);

      return res.json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await model.findByPk(id);

      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      user.destroy(user);
      return res.json();
    } catch (error) {
      return res.status(400).json({
        errors: ['Usuário não encontrado ou não existe!'],
      });
    }
  }
}

export default new UserController();

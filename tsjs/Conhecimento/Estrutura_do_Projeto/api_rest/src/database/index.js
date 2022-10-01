import Sequelize from 'sequelize';
import databaseConfig from '../configuration/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));

require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: '35.247.230.244',
  port: '3306',
  username: 'root',
  password: 'Sb86BTugUaZdaECSHt^%F%QaQ#GP',
  database: 'escola',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'update_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};

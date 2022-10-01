import dontenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import './src/database';
// import connectionData from './src/database';

dontenv.config();
// connectionData();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;

// const app =  express();

// app.use(express.urlencoded({ extented: true}));
// app.use(express.json());

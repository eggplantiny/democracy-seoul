import express from 'express';
import routes from './routes/index';
require('dotenv').config();

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

class App {
  private app : express.Application;
  constructor () {
    this.app = express();
  }

  public init (): void {
    const { app } = this
    // add routes
    routes.forEach((route) => app.use(`/api/${route.name}`, route.router))
  }

  public start (): void {
    this.app.listen(port, () => console.log(`Application running on ${host}:${port}`));
  }
}

(() => {
  const app = new App();
  app.init();
  app.start();
})()

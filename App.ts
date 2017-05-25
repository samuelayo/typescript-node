
import * as express from 'express';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
<<<<<<< HEAD

=======
  
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
<<<<<<< HEAD

      res.send(
        `<html>
        <head>
          <title>Tutorial: HelloWorld</title>
        </head>
        <body>
          <h1>HelloWorld Tutorial</h1>

      <p>
        The current data and time is: 
        <strong>`+ new Date() + `</strong>
      </p>    

        </body>
      </html>`
      );
=======
      res.json({
        message: 'Hello World!'
      });
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
    });
    this.express.use('/', router);
  }

}

export default new App().express;

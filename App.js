"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
=======
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
const express = require("express");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
<<<<<<< HEAD
            res.send(`<html>
        <head>
          <title>Tutorial: HelloWorld</title>
        </head>
        <body>
          <h1>HelloWorld Tutorial</h1>

      <p>
        The current data and time is: 
        <strong>` + new Date() + `</strong>
      </p>    

        </body>
      </html>`);
=======
           res.send(
                `<html>
                  <head>
                    <title>Tutorial: HelloWorld</title>
                  </head>
                  <body>
                    <h1>HelloWorld Tutorial</h1>
                    
                <p>
                  The current data and time is: 
                  <strong>`+new Date()+`</strong>
                </p>    
                    
                  </body>
                </html>`
            )
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
        });
        this.express.use('/', router);
    }
}
<<<<<<< HEAD
=======
Object.defineProperty(exports, "__esModule", { value: true });
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
exports.default = new App().express;

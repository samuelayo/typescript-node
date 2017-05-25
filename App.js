"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;

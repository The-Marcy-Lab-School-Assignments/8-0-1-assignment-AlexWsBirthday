const path = require("path");
//importing express 
const express = require('express');
//making your application by calling express()
const app = express();

// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};

//
const pathToDistFolder = path.join(__dirname, '../myfirstserver/dist');

// console.log({ __dirname })
// console.log({ pathToDistFolder })

// Controller function for serving a hello message
const serveStatic = express.static(pathToDistFolder);

// Register the logRoutes middleware globally to log all requests
//don't forget serverStatic
app.use(logRoutes);
app.use(serveStatic);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
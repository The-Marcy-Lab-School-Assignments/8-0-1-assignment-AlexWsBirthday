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

// Controller function for serving a hello message
const serveStatic = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`Hello, ${name}!`);
};

// Register the logRoutes middleware globally to log all requests
app.use(logRoutes);

// Register the serveHello controller for the /api/hello route
app.get('/api/hello', serveHello);
const models = fs.readdirSync(config.rootPath + '/app/models');
    models.forEach((model) => {
        require(config.rootPath + '/app/models/' + model);
    });
    const routes = require('../app/routes/index');

app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
  });

const express = require('express');
const routes = require('../app/routes/index');
const path = require('path');
module.exports = function (app, config) {

    try {
        mongoose.connect(
            config.dbURL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => logger.log("Connected to DB!"));

console.log(config.rootPath)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    };
    
    app.use(express.static(config.rootPath + '/public'));

    app.use(express.json());

    app.use('/', routes);

    app.get('/customers', (req, res, next) => {
        res.status(200).json('Customers retrieved');
});

app.use(function (req, res) {
    res.type('text/plan');
    res.status(404);
    res.send('The resource you requested cannot be found');
});

 app.use(function (err, req, res, next) {
    console.log(err);
    if (process.env.NODE_ENV !== 'test') console.log(err.stack,'error');
    res.type('text/plan');
    if(err.status){
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('500 Sever Error');
    }  
});

console.log("Starting application");
};

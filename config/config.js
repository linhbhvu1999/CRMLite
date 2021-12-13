const path = require('path');
const env = process.env.NODE_ENV || 'development';

var config = {
       development: {
       rootPath: path.normalize(__dirname + '/..'),
       app: { name: ' CRMLite' },
       port: 80,
       dbURL: 'mongodb+srv://linhvu:<password>@cluster0.1qdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
       secret: "cayennedlikedhistreats"
},
       test: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: "mongodb+srv://linhvu:<password>@cluster0.1qdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
       },
       production: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 8080,
              dbURL: 'mongodb+srv://linhvu:<password>@cluster0.1qdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
              secret: "cayennedlikedhistreats"
       } 
};


module.exports = config[env];



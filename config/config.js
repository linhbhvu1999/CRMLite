const path = require('path');
const env = process.env.NODE_ENV || 'development';

var config = {
       development: {
       rootPath: path.normalize(__dirname + '/..'),
       app: { name: ' CRMLite' },
       port: 80,
       dbURL: 'mongodb+srv://linhvu:Connhonhaqua96,@cluster0.1qdjj.mongodb.net/test',
       secret: "cayennedlikedhistreats"
},
       test: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: "mongodb+srv://linhvu:Connhonhaqua96,@cluster0.1qdjj.mongodb.net/test"
       },
       production: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 8080,
              dbURL: 'mongodb+srv://linhvu:Connhonhaqua96,@cluster0.1qdjj.mongodb.net/test',
              secret: "cayennedlikedhistreats"
       } 
};


module.exports = config[env];



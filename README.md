# API Server
This is an API skeleton project. You can easily extend it or add your code using the template api endpoints defined in it. Project comes with linting, expressjs, nodemon and offers direct serving support with development/production mode
## Requirements
* nodejs
* npm
## Configure
Configurations are defined inside the `settings.js` file. Properties: 
* env: define running mode [development/production]
* port: define expressjs running port
* corsOptions: define CORS options
    * origin: specify server origin
    * methods: specify supported methods [GET, POST]
    * credentials: specify use of credentials
    * allowedHeaders: specify allowed headers
* certificate: specify certificate file path{
    * private: private key certificate file path
    * cert: certificate file path
This list can be extended; CORS options can be extended, please refer to CORS package module
## Install
Run `npm install` to install dependencies. You are ready to go. Run `npm run sever` to serve the skeleton server
## Run
> npm run server

runs the server
> npm run watch

runs the server, watching for changes via nodemon
> npm run lint

performs code linting
## Dependencies
* NodeJs
* ExpressJs
* CORS
### Dev. Dependencies
* EsLint
* Nodemon
* Typescript
## License
MIT
## Credits 
Jrmarco - developer@bigm.it
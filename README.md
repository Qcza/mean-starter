# mean-starter
[![dependencies Status](https://david-dm.org/Qcza/mean-starter/status.svg)](https://david-dm.org/Qcza/mean-starter)
[![devDependencies Status](https://david-dm.org/Qcza/mean-starter/dev-status.svg)](https://david-dm.org/Qcza/mean-starter?type=dev)

Starter for application based on MEAN stack.

## MEAN ##
- MongoDB (https://www.mongodb.com/)
- Express (https://expressjs.com/)
- Angular (https://angularjs.org/)
- NodeJS (https://nodejs.org/)

## Dependencies ##
Bower
> npm install --save-dev bower

Gulp CLI
> npm install --save-dev gulp-cli

## Installation ##
> npm install

## Starting app ##
**Starting with SASS watcher and browser-sync tool**
> npm start

**Starting without watchers**
> npm run server

## Config ##
MongoDB accesses and files paths could be configured in `config.js`

**Default config**
```javascript
// Mongo database URL
exports.dbUrl = 'localhost:27017/test';

// Mongo database login
exports.dbUser = undefined;

// Mongo database password
exports.dbPwd = undefined;

// Images path
exports.imgPath = 'static/public/images/'; // default: 'static/public/images/'

// Avatars path
exports.avtrPath = 'static/public/images/avatars/'; // default: 'static/public/images/avatars/'

// Files path
exports.filePath = 'static/public/files/'; // default: 'static/public/files/'

// Port
exports.port = process.env.PORT || 3000;
```

## Seed database ##
Database seed could be write in `helpers/seed.js`

Run seed with `npm run seed` command

## Unit tests ##
Unit tests with use of [Jasmine](http://jasmine.github.io/) should be added in `spec/` folder.

Unit test file name pattern: `*.spec.js`

Run unit tests with `npm test` command

## Used additional packages ##
CSS framework
- Bootstrap (http://getbootstrap.com/)

Icons package
- Font Awesome (http://fontawesome.io/)

Additional ng modules
- UI Bootstrap (https://angular-ui.github.io/bootstrap/)
- ngAnimate (https://docs.angularjs.org/api/ngAnimate)
- ngTouch (https://docs.angularjs.org/api/ngTouch)

Additional Express packages
- multer (https://github.com/expressjs/multer)
- body-parser (https://github.com/expressjs/body-parser)
- cors (https://github.com/expressjs/cors)

Additional packages
- bcrypt (https://github.com/ncb000gt/node.bcrypt.js)
- path (https://github.com/jinder/path)

## Used additional dev packages ##
Unit tests
- jasmine-node (https://github.com/mhevery/jasmine-node)
- request (https://github.com/request/request)

Packages manager
- Bower (https://bower.io/)

Tasks automation tools
- Gulp (http://gulpjs.com/)
- Gulp-sass (https://github.com/dlmanning/gulp-sass)
- Browser-sync (https://www.browsersync.io/)
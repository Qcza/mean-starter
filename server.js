"use strict";
const mongodb = require('mongodb');
const assert = require('assert');
const co = require('co');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const fs = require('fs');

const config = require('./config');

//MONGO CONFIG
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const dbUrl = (config.dbUser && config.dbPwd) ? ('mongodb://' + config.dbUser + ':' + config.dbPwd + '@' + config.dbUrl) : ('mongodb://' + config.dbUrl);

//BCRYPT CONFIG
const saltRounds = 8;

//MULTER CONFIG
//AVATARS
const avtrUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, config.avtrPath);
        },
        filename: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            cb(null, "" + Math.random().toString(36).substring(7) + ext);
        }
    })
});
// IMAGES
const imgUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, config.imgPath);
        },
        filename: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            cb(null, "" + Math.random().toString(36).substring(7) + ext);
        }
    })
});
// FILES
const fileUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, config.filePath);
        },
        filename: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            cb(null, "" + Math.random().toString(36).substring(7) + ext);
        }
    })
});

// EXPRESS
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));
app.use('/components', express.static(__dirname + '/app/components/')); // BOWER COMPONENTS
app.use('/js', express.static(__dirname + '/app/js/')); // ANGULAR
app.use('/css', express.static(__dirname + '/app/css/')); // STYLES
app.use('/css', express.static(__dirname + '/app/components/bootstrap/dist/css/')); // BOOTSTRAP CSS
app.use('/css', express.static(__dirname + '/app/components/font-awesome/css/')); // FONT AWESOME CSS
app.use('/fonts', express.static(__dirname + '/app/components/font-awesome/fonts/')); // FONT AWESOME FONTS
app.use('/img', express.static(__dirname + '/app/' + config.avtrPath)); // AVATARS
app.use('/img', express.static(__dirname + '/app/' + config.imgPath)); // IMAGES
app.use('/files', express.static(__dirname + '/app/' + config.filePath)); // FILES

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

//
// ROUTING
// app.post('/', function (req, res) {
// })
// app.put('/', function (req, res) {
// })
// app.get('/', function (req, res) {
// })
// app.delete('/', function (req, res) {
// })

app.get('/data', function (req, res) {
   res.send('smile');
});

app.listen(config.port);
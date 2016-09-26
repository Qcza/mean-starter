"use strict";
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
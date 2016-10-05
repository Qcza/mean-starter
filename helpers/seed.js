"use strict";
const mongodb = require('mongodb');
const assert = require('assert');
const co = require('co');
const bcrypt = require('bcrypt');

const config = require('../config');

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const dbUrl = (config.dbUser && config.dbPwd) ? ('mongodb://' + config.dbUser + ':' + config.dbPwd + '@' + config.dbUrl) : ('mongodb://' + config.dbUrl);

//SEEDS

// co(function*() {
//     let db = yield MongoClient.connect(dbUrl);
//
//     let r = yield db.collection('test').insertOne({'test': 'test'});
//     assert.equal(1, r.insertedCount);
//
//     db.close();
// }).catch(function (err) {
//     console.log(err.stack);
// });
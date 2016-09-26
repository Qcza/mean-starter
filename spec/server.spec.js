"use strict";
const request = require('request');
const config = require('../config');

const port = config.port;
const main_url = 'http://localhost:' +port;

describe("Landing page", function() {
    it("should return status code 200", function(done) {
        request(main_url, function (err, res, body) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});
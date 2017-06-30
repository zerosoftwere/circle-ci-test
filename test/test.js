const request = require('supertest');
const app = require('../index').app;

describe('GET /', function() {
    it ('Should return http response with status code 200', function(done) {
        request(app).get('/').expect(200, done);
    });
});
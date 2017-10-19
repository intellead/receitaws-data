var server = require('../bin/www');
var expect = require('chai').expect;
var request = require('supertest');
var google_company_data = require('./google_company_data.json');

describe('/', function() {

    after(function () {
        server.close();
    });

    it('should return status code 422', function(done) {
        request(server)
            .get('/')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(422);
                done();
            });
    });

    it('should return status code 200 with GOOGLE data', function(done) {
        request(server)
            .get('/?cnpj=06.990.590/0001-23')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                var actual = JSON.stringify(res.body);
                var expected = JSON.stringify(google_company_data);
                expect(actual).to.equal(expected);
                done();
            });
    });

});
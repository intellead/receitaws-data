var server = require('../bin/www');
var expect = require('chai').expect;
var request = require('supertest');

describe('/', function() {

    after(function () {
        server.close();
    })

    it('should return status code 422', function(done) {
        request(server)
            .get('/')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(422);
                done();
            });
    });

    it('should return status code 200 with SOFTPLAN data', function(done) {
        request(server)
            .get('/?cnpj=82.845.322/0001-04')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('company_name');
                expect(res.body.company_name).to.equal('SOFTPLAN PLANEJAMENTO E SISTEMAS LTDA');
                done();
            });
    });

});
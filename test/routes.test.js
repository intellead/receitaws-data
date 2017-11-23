/*
 *
 * Copyright 2017 Softplan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var sinon = require('sinon');
var proxyquire = require('proxyquire');
var supertest = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var request_stub = sinon.stub();
var app = proxyquire('../app', {'request': request_stub});
var request = supertest(app);
var request2 = require('request');

var google_company_data = require('./google_company_data.json');

describe('/', function() {

    this.timeout(15000);

    it('should return status code 422', function(done) {
        request_stub.withArgs({url: 'http://intellead-security:8080/auth/1'}).yields(null, {'statusCode': 200}, null);
        request.get('/')
            .set('token', '1')
            .expect(422)
            .end(function(err, res) {
                done();
            });
    });

    it('should return status code 200 with GOOGLE data', function(done) {
        var receitaUrl = 'https://www.receitaws.com.br/v1/cnpj/06990590000123';
        request2(receitaUrl, function (error, response, body) {
            request_stub.withArgs({url: 'http://intellead-security:8080/auth/1'}).yields(null, {'statusCode': 200}, null);
            request_stub.withArgs(receitaUrl).yields(error, response, body);
            request.get('/?cnpj=06.990.590/0001-23')
                .set('token', '1')
                .expect(200)
                .end(function(err, res) {
                    var actual = JSON.stringify(res.body);
                    var expected = JSON.stringify(google_company_data);
                    expect(actual).to.equal(expected);
                    done();
                });
        });
    });

    it('should return status code 403', function(done) {
        request_stub.withArgs({url: 'http://intellead-security:8080/auth/1'}).yields(null, {'statusCode': 403}, null);
        request.get('/')
            .set('token', '1')
            .expect(403)
            .end(function(err, res) {
                done();
            });
    });

});

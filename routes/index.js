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

var express = require('express');
var router = express.Router();
var url = require('url');
var request = require('request');

router.get('/', function(req, res, next) {
    var params = url.parse(req.url, true).query;
    var cnpjParam = params.cnpj;
    if (cnpjParam == '' || cnpjParam == undefined) {
        return res.sendStatus(422);
    }
    var cnpj = '';
    if (cnpjParam.includes('.') || cnpjParam.includes('/') || cnpjParam.includes('-')) {
        cnpj = cnpjParam.replace(/\./g, '');
        cnpj = cnpj.replace(/\//g, '');
        cnpj = cnpj.replace(/-/g, '');
    } else {
        cnpj = cnpjParam;
    }
    var queryReceitaws = 'https://www.receitaws.com.br/v1/cnpj/'+cnpj;
    request(queryReceitaws, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var receitaWSResponse = JSON.parse(body);
            if (receitaWSResponse.status != 'OK') {
                res.sendStatus(204);
            }
            var data = {
                "cnpj": receitaWSResponse.cnpj,
                "company_type": receitaWSResponse.tipo,
                "company_opening_date": receitaWSResponse.abertura,
                "company_name": receitaWSResponse.nome,
                "company_fantasy_name": receitaWSResponse.fantasia,
                "main_activity_code": receitaWSResponse.atividade_principal.code,
                "main_activity_name": receitaWSResponse.atividade_principal.text,
                "company_social_capital": receitaWSResponse.capital_social,
                "company_uf": receitaWSResponse.uf,
                "company_situation": receitaWSResponse.situacao,
                "company_neighborhood": receitaWSResponse.bairro,
                "company_street": receitaWSResponse.logradouro,
                "company_adress_number": receitaWSResponse.numero,
                "company_zip_code": receitaWSResponse.cep,
                "company_city": receitaWSResponse.municipio,
                "company_telephone": receitaWSResponse.telefone,
                "company_board_members" : receitaWSResponse.qsa
            };
            res.status(200).send(data);
        } else {
            if (error) {
                console.log("Error: " + error);
            }
            res.sendStatus(response.statusCode);
        }
    });
});

module.exports = router;

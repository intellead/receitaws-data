# Welcome to ReceitaWS Data documentation!

ReceitaWS Data aims to be one of the services to enrich information about leads.

## Contents
  * Introduction
    * Features
  * Instalation
    * Dependencies
    * Get a copy
  * Configuration
    * Config vars
  * Use Cases
    * Company information [/]
  * Copyrights and Licence
  
## Introduction
ReceitaWS Data has as goal, to return information about company through cnpj.

#### Features
This application provides company information.

## Instalation
receitaws-data is a very smaller component that provide a simple way to retrieval company information for intellead ecosystem.  
This way you do not need to install any other components for this to work.

#### Dependencies
This application depends on site https://www.receitaws.com.br and its API.

#### Get a copy
I like to encourage you to contribute to the repository.
This should be as easy as possible for you but there are few things to consider when contributing. The following guidelines for contribution should be followed if you want to submit a pull request.
  * You need a GitHub account.
  * Submit an issue ticket for your issue if there is no one yet.
  * If you are able and want to fix this, fork the repository on GitHub.
  * Make commits of logical units and describe them properly.
  * If possible, submit tests to your patch / new feature so it can be tested easily.
  * Assure nothing is broken by running all the tests.
  * Open a pull request to the original repository and choose the right original branch you want to patch.
  * Even if you have write access to the repository, do not directly push or merge pull-requests. Let another team member review your pull request and approve.

## Configuration
Once the application is installed (check Installation) define the following settings to enable the application behavior.

#### Config vars
The application uses a postgres database to store the dataset.  
For this it is necessary to configure the connection variables.  
You must config the following vars:
  * SECURITY_URL - Full URL to intellead-security auth endpoint (`http://intellead-security/auth`);

## Use Cases
A use case for receitaws-data.

#### Company information [/]
This application provides a service to retrieval company information.
We can call the API like this:

```
var cnpj = 33997391000110; //some cnpj
var queryReceitaws = 'https://your_domain.com/?cnpj='+cnpj;
request(queryReceitaws, function (error, response, body) {
    if (response.statusCode == 200) {
        //do something
    }
});
```

This service return a json like this:

```
{
    "cnpj": "33.997.391/0001-10",
    "company_type": "MATRIZ",
    "company_opening_date": "21/06/2017",
    "company_name": "Company Name Ltda",
    "company_fantasy_name": "Company Name",
    "main_activity_code": "70.20-4-00",
    "main_activity_name": "Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica",
    "company_social_capital": "100000.00",
    "company_uf": "SC",
    "company_situation": "ATIVA",
    "company_neighborhood": "CANASVIEIRAS",
    "company_street": "RODOVIA SC 401",
    "company_adress_number": "999",
    "company_zip_code": "88.054-600",
    "company_city": "FLORIANOPOLIS",
    "company_telephone": "(48) 99999-9999",
    "company_board_members" : [
                                   {
                                       "qual": "49-Sócio-Administrador",
                                       "nome": "NOME SOCIO 1"
                                   },
                                   {
                                       "qual": "49-Sócio-Administrador",
                                       "nome": "NOME SOCIO 2"
                                   }
                               ]
}
```

## Copyrights and Licence
Project copyright and license is available at [LICENSE](./LICENSE).

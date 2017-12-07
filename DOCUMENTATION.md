<h1>Welcome to ReceitaWS Data documentation!</h1>
ReceitaWS Data aims to be one of the services to enrich information about leads.

<h3>Contents</h3>
<ul>
  <li>Introduction</li>
    <ul>
      <li>Features</li>
    </ul>
  <li>Instalation
    <ul>
      <li>Dependencies</li>
      <li>Get a copy</li>
    </ul>
  </li>
  <li>Configuration
  <li>Use Cases
    <ul>
      <li>Company information [/]</li>
    </ul>
  </li>
  <li>Copyrights and Licence</li>
</ul>
<h3>Introduction</h3>
ReceitaWS Data has as goal, to return information about company through cnpj.
<h4>Features</h4>
This application provides company information.
<h3>Instalation</h3>
receitaws-data is a very smaller component that provide a simple way to retrieval company information for intellead ecosystem.
This way you do not need to install any other components for this to work.
<h4>Dependencies</h4>
This application depends on site https://www.receitaws.com.br and its API.
<h4>Get a copy</h4>
I like to encourage you to contribute to the repository.<br>
This should be as easy as possible for you but there are few things to consider when contributing. The following guidelines for contribution should be followed if you want to submit a pull request.
<ul>
  <li>You need a GitHub account</li>
  <li>Submit an issue ticket for your issue if there is no one yet.</li>
  <li>If you are able and want to fix this, fork the repository on GitHub</li>
  <li>Make commits of logical units and describe them properly.</li>
  <li>If possible, submit tests to your patch / new feature so it can be tested easily.</li>
  <li>Assure nothing is broken by running all the tests.</li>
  <li>Open a pull request to the original repository and choose the right original branch you want to patch.</li>
  <li>Even if you have write access to the repository, do not directly push or merge pull-requests. Let another team member review your pull request and approve.</li>
</ul>
<h3>Configuration</h3>
Once the application is installed (check Installation) is not need define others settings. 
<h3>Use Cases</h3>
A use case for receitaws-data.
<h4>ECompany information [/]</h4>
This application provides a service to retrieval company information.
We can call the API like this:


```javascript

var cnpj = 33997391000110; //some cnpj
var queryReceitaws = 'https://your_domain.com/?cnpj='+cnpj;
request(queryReceitaws, function (error, response, body) {
    if (response.statusCode == 200) {
        //do something
    }
});

```


This service return a json like this:


```javascript

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


<h3>Copyrights and Licence</h3>
Project copyright and license is available at <a href="https://github.com/intellead/receitaws-data/blob/master/LICENSE">LICENSE</a>.

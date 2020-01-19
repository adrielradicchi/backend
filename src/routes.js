const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SearchController');
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 
routes.get('/search', SeachController.index);

module.exports = routes;

//Metodos HTTP: GET, POST, PUT, DELETE

//Tipo Parametros: 

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

/* 
Exemplo de metodo utilizando o request.body
app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello World'});
}); 
*/

/* 
// Exemplo de um metodo utilizando Route Params
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello World'});
}); 
*/

/* 
// Exemplo de um metodo utilizando query params
app.post('/', (request, response) => {
    console.log(request.query);
    return response.json({message:'Hello World'});
});
 */
// Exemplo do metodo get
// app.get('/', (request, response) => {
//     return response.json({message: 'Hello OmniStack'});
// });
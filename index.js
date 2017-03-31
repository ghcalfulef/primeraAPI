//AQUI SE IMPORTA LA LIBRERIA DE EXPRESS
var express = require('express');

var app = express();
var bodyparser = require('body-parser');

var mongoose = require('mongoose');

var modelo = require('./model')(app, mongoose);
var Ctrl = require('./controller');
app.use(bodyparser.json());
var ruta = express.Router();


ruta.get('/', function(req, res){
    res.send({mensaje: 'hola mundo'})

})

ruta.route('/guardar')
    .post(Ctrl.agregarUsuario);


app.use(ruta);

mongoose.connect('mongodb://localhost/gerardo', function(err, res){
    if (err) {
        console.log('ERROR:' + err);
    }
    else {
        console.log('Conectado a mongodb');
    }
})

app.listen(8030);
console.log('Ejecutando en puerto 8030');
exports = module.exports = app;

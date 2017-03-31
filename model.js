var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Datos = new Schema({
    nombre: {type:String, required : true},
    apellido: {type : String, required : true},
    archivo: {type : String, required : true}
});

module.exports = mongoose.model('usuario', Datos);

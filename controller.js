var mongose = require ('mongoose');


var Objeto = mongose.model('usuario');

exports.agregarUsuario = function(req, res){
    console.log('POST');
    var datos = new Objeto({
        nombre :  req.body.nombre,
        apellido : req.body.apellido,
        telefono : req.body.archivo.
        archivo : req.body.archivo
    });
    datos.save(function(err, datos){
        if (err) {
            console.log();
            return res.status(500).send(err.menssage);
        }
        else {
            return res.status(200).jsonp(datos);
        }
    });
};

let bandas = require('../db');

let listaBandas = bandas.lista;

let bandasController = {listadoBanda : function (req, res) {
    resultados = [];
    for (let i = 0; i < listaBandas.length; i++) {
        let infoBanda = listaBandas[i];
        let banda = {nombre : infoBanda.nombre, cover : infoBanda.cover, id : infoBanda.id}
        resultados.push(banda);
    }
    res.render('index', {resultados : resultados})    
    }, 
    detalleBanda : function (req, res) {
        
    },
    porGenero : function (req, res) {
        
    }
};

module.exports = bandasController;
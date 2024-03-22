let bandas = require('../db/index');

let listaBandas = bandas.lista;

let bandasController = {listadoBanda : function (req, res) {
    for (let i = 0; i < listaBandas.length; i++) {
        let banda = listaBandas[i];
    }
    }, 
    detalleBanda : function (req, res) {
        
    },
};

module.exports = bandasController;
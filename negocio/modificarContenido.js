const { convertirJson } = require('../negocio/convertirContenido');
const { guardarContentinoArchivo, borrarArchivo } = require('../metodo/funcionesArchivo')
const modeloBase = require('../config/modeloJson.json');

function modificarJson() {
    try {
        const resultadosConvertidos = convertirJson();
        const nuevoJson = [];

        resultadosConvertidos.forEach(element1 => {
            element1.forEach(element2 => {
                const nuevoModelo = JSON.parse(JSON.stringify(modeloBase));

                nuevoModelo.puertaA.val1 = element2.puerta1.val1;
                nuevoModelo.puertaB.val2 = element2.puerta1.val2;

                nuevoJson.push(nuevoModelo);
            });
        });

        if(guardarContentinoArchivo(nuevoJson) == true){
            console.log('NEGOCIO - modificarContenido - modificarJson: Se borraron los archivos en la carpeta IN')
            borrarArchivo();
            return nuevoJson;
        }
        else{
            console.log('NEGOCIO - modificarContenido - modificarJson: NO SE GUARDO EL JSON')
        }

    } catch (error) {
        throw new Error('NEGOCIO - modificarContenido - modificarJson: ' + error.message);
    }
}

module.exports = {
    modificarJson
};

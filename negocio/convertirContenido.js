const { rutaEntrada } = require('../config/config')
const { obtenerArchivosDeDirectorio, leerContenidoArchivo } = require('../metodo/funcionesArchivo');
const { envolverEnCorchetes } = require('../negocio/deteccionContenido')

function convertirJson(){
    const directorio = rutaEntrada;
    const contenidoProcesadoFinal = []
    try {
        const listaArchivos = obtenerArchivosDeDirectorio(directorio);
        if(listaArchivos.lenght === 0){
            console.log('NEGOCIO - convertirArchivo - convertirJson: NO SE DETECTAN ARCHIVOS')
            return;
        }

        for (const element of listaArchivos) {
            const contenidoArchivo = leerContenidoArchivo(element);
            const adaptarContenido = envolverEnCorchetes(contenidoArchivo);
            const contenidoProcesado = JSON.parse(adaptarContenido);

            contenidoProcesadoFinal.push(contenidoProcesado);
        }

        return contenidoProcesadoFinal;
    } catch (error) {
        throw new Error('NEGOCIO - convertirArchivo - convertirJson: ' + error.message);
    }
}

module.exports = {
    convertirJson
}
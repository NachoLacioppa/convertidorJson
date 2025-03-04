const fs = require('fs');
const path = require('path');
const { fechaHora } = require('../config/config')

function obtenerArchivosDeDirectorio(directorio) {
    try {
        const archivos = fs.readdirSync(directorio); 
        const archivosConRutaCompleta = archivos
            .map(archivo => path.resolve(directorio, archivo))
            .filter(archivo => fs.statSync(archivo).isFile()); 
        
        return archivosConRutaCompleta; 
    } catch (error) {
        throw new Error('METODO - funcionesArchivo - obtenerArchivosDeDirectorio: ' + error.message);
    }
}

function leerContenidoArchivo(rutaArchivo) {
    try {
        const contenido = fs.readFileSync(rutaArchivo, 'utf8'); 
        return contenido;
    } catch (error) {
        throw new Error('METODO - funcionesArchivo - leerContenidoArchivo: ' + error.message);
    }
}

function guardarContentinoArchivo(data) {
    const flag = true;
    try {
        const directorio = path.join(__dirname, '..', 'datos', 'out'); 
        const rutaArchivo = path.join(directorio, `resultado_${fechaHora}.txt`); 



        if (!fs.existsSync(directorio)) {
            fs.mkdirSync(directorio, { recursive: true });
        }

        const contenido = JSON.stringify(data, null, 2);
        fs.writeFile(rutaArchivo, contenido, (err) => {
            if (err) {
                flag = false
                console.log('METODO - funcionesArchivo - guardarContentinoArchivo (dentro del try): ' + err);
            } else {
                console.log(`METODO - funcionesArchivo - guardarContentinoArchivo - Archivo guardado correctamente en: ${rutaArchivo}`);
            }
        });

        return flag

    } catch (error) {
        flag = false
        console.log('METODO - funcionesArchivo - guardarContentinoArchivo: ' + error.message);
    }

}

//TERMINAR ESTA FUNCION
function borrarArchivo(){
    const flag = true
    try {
        const directorio = path.join(__dirname, '..', 'datos', 'in')
        if (fs.existsSync(directorio)) {
            fs.readdir(directorio, (err, archivos) => {
                if (err) {
                    console.error('METODO - funcionesArchivo - borrarArchivo - Error al leer la carpeta:', err);
                    return;
                }
    
                archivos.forEach(archivo => {
                    const rutaArchivo = path.join(directorio, archivo);
                    fs.unlink(rutaArchivo, (err) => {
                        if (err) {
                            console.error(`METODO - funcionesArchivo - borrarArchivo - Error al borrar ${archivo}:`, err);
                        } else {
                            console.log(`METODO - funcionesArchivo - borrarArchivo - Archivo eliminado: ${archivo}`);
                        }
                    });
                });
            });
        } else {
            console.log('METODO - funcionesArchivo - borrarArchivo - La carpeta datos/out no existe.');
        }
    } catch (error) {
        throw new Error('METODO - funcionesArchivo - leerContenidoArchivo: ' + error.message);
    }

}

module.exports = {
    obtenerArchivosDeDirectorio,
    leerContenidoArchivo,
    guardarContentinoArchivo,
    borrarArchivo
};
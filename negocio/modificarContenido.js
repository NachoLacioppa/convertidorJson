const { bancoID, cantidadFacturas } = require('../config/config')
const { convertirJson } = require('../negocio/convertirContenido');
const { guardarContentinoArchivo, borrarArchivo } = require('../metodo/funcionesArchivo');

function modificarJson() {
    try {
        const resultadosConvertidos = convertirJson();
        let objetoModificado = [];

        resultadosConvertidos.forEach(element1 => {
            element1.forEach(element2 => {
                //falta banco y cantidad
                let molde = {
                    banco: bancoID,
                    cantidad: cantidadFacturas,
                    factura: {
                        idFactura: {
                            cuitEmisor: element2.idFactura.cuitEmisor
                        },
                        cuitComprador: element2.cuitComprador,
                        cbuComprador: element2.cbuComprador,
                        cbuEmisor: element2.idFactura.cbuEmisor,
                        fechaVencimientoPago: element2.fechaVencimientoPago,
                        saldoAceptado: element2.saldoAceptado,
                    }
                }
                objetoModificado.push(molde)
            });
        });

        if(guardarContentinoArchivo(objetoModificado) == true){
            if(borrarArchivo() === true){
                return objetoModificado;
            }
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

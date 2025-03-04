const rutaEntrada = './datos/in'
const rutaSalida = './datos/out'
const ahora = new Date();
const fechaHora = ahora.getFullYear().toString() + 
                      String(ahora.getMonth() + 1).padStart(2, '0') + 
                      String(ahora.getDate()).padStart(2, '0') + 
                      String(ahora.getHours()).padStart(2, '0') + 
                      String(ahora.getMinutes()).padStart(2, '0') + 
                      String(ahora.getSeconds()).padStart(2, '0');
 

module.exports = {
    rutaEntrada,
    rutaSalida,
    fechaHora
}

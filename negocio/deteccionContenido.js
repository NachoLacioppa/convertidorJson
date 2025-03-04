function envolverEnCorchetes(contenido) {
    try {
        if (contenido.trim().startsWith("[") && contenido.trim().endsWith("]")) {
            return contenido;
        } else {
            return `[${contenido}]`;
        }
    } catch (error) {
        throw new Error('NEGOCIO - deteccionContenido - envolverEnCorchetes: ' + error.message);
    }
}

module.exports = {
    envolverEnCorchetes
}
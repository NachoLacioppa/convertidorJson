const { modificarJson } = require('./negocio/modificarContenido')

async function main() {
    try {
        const reusltado = await modificarJson();
        // console.log(reusltado)
    } catch (error) {
        throw new Error('INDEX - index - index: ' + error.message)
    }
}

main();
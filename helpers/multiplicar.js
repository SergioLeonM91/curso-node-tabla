const fs = require('fs');
const colors = require('colors');

const multiplicar = ( base, listar, hasta ) => {

    return new Promise( ( resolve ) => {
        
        let salida, consola = '';

        for (let limite = 1; limite <= hasta; limite++) {
            consola += `${ colors.bold.cyan(base) } ${'x'.random} ${ colors.bold.magenta(limite) } ${'='.random} ${ colors.bgRed(base * limite) }\n`;
            salida += `${ base } x ${ limite } = ${ base * limite }\n`;
        }

        if( listar ) {
            console.log(`${'===================='.blue}\n     ${'Tabla del'.green} ${ colors.red.bold.underline( base ) }     \n${'===================='.blue}`);
            console.log(salida);
        }

        resolve( salida );
    });

}

const archivo = ( base, salida ) => {

    return new Promise( (resolve, reject) => {

        try {
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
            resolve( `tabla-${ base }.txt creado` );
        } catch (error) {
            reject(`No se pudo crear el archivo tabla-${ base }.txt`);
        }

    });

}

const crearArchivo = async( base, listar, hasta ) => {

    try {
        const salida = await multiplicar( base, listar, hasta );
        const msg = await archivo( base, salida );

        return msg;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
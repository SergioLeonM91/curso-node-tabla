const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Numero base de la tabla',
            type: 'number'
        },
        'l': {
            alias: 'listar',
            default: false,
            describe: 'Muestra tabla en consola',
            type: 'boolean'
        },
        'h': {
            alias: 'hasta',
            demandOption: true,
            describe: 'Hasta que numero imprimir la tabla',
            type: 'number'
        }
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ) {
            throw 'La base debe ser numerica';
        } else if( isNaN( argv.h ) ) {
            throw 'hasta debe ser numerico';
        }

        return true;
    })
    .argv;

module.exports = argv;
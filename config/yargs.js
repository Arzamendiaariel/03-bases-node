const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la Base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    demandOption: true,
    describe: 'Limite de multiplicación',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La Base debe ser un numero';
    }
    if (isNaN(argv.h)) {
      throw 'Hasta debe ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;

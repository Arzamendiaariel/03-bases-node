const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = '';

    for (let index = 1; index <= hasta; index++) {
      salida = salida + `${base} x ${index} = ${base * index}\n`;
      consola =
        consola + `${base} ${'x'.red} ${index} ${'='.blue} ${base * index}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // si sucede un error tengo que usar un try catch

    if (listar) {
      console.log(' ========================== '.green);
      console.log('Tabla del'.green, colors.blue(base));
      console.log(' ========================== '.green);
      console.log(consola);
    }

    return `tabla-${base}.txt `;
  } catch (error) {
    throw error;
  }
};
// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log(' ========================== ');
//     console.log('Tabla del', base);
//     console.log(' ========================== ');
//     let salida = '';
//     const fs = require('fs');

//     for (let index = 1; index <= 10; index++) {
//       salida = salida + `${base} x ${index}=${base * index}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida); // si sucede un error tengo que usar un try catch

//     resolve(`tabla-${base}.txt `);
//   });
// };
module.exports = { crearArchivo };

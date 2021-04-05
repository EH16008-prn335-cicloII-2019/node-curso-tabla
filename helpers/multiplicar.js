//Defino el FileSistemSync que me permite escribir documentos a mi computadora
const fs = require("fs");
//Defino una constante para utilizar los colores 
const colors = require("colors");
//Defino una promesa que espera 3 params y dentro de ella me genera las tablas de
// multiplicar de dicha base que me la imprima y ademas me pueden pasar el limite al que puedo llegar
const crearArchivo = async (base = 5, list = false,hasta=10) => {
  try {
    let data = "";
    for (let i = 1; i <= hasta; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }
    if (list) {
      console.log("==============================".rainbow);
      console.log(`Tabla del ${base}`.rainbow.bold);
      console.log("==============================".rainbow);

      console.log(data.rainbow.bold.underline);
    }

    fs.writeFileSync(`./tablas-multiplicar/tabla-${base}.txt`, data);
    return `tabla-${base}.txt`.rainbow.bold.underline;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

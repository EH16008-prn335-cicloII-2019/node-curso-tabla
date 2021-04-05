//Mando a llamar los archivos que necesitare para que funcione mi app o mi index .js
const { crearArchivo } = require("./helpers/multiplicar");
const yargs = require("./config/yargs");

console.clear();
//Llamo a la promesa CrearArchivo que me ejecuta mis tablas de multiplicar
//ya que es un promesa tengo que pasarle su then y catch
crearArchivo(yargs.base, yargs.l,yargs.h)
  .then((Archivo) => console.log(Archivo, "Creado".rainbow.bold.underline))
  .catch((err) => console.log(err));

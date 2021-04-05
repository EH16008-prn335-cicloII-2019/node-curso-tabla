 /*
aqui declaro una constante de yargs utilizando require
luego defino las opciones de cada entrada que sera en consola por medio de la 
letras y el alias y defino su tipo y lo describo y ademas le dejo un valor por defecto 
utilizo el metodo .check siempre de yargs para validar algunas cosas
*/
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "La base indica la tabla de multiplicar",
    default: 5,
  })
  .options("l", {
    alias: "list",
    default: false,
    type: "boolean",
    describe: "list all",
  })
  .options("h", {
    alias:"hasta",
    default:10,
    type:"number",
    describe: "Limite para la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un numero.");
    } else {
      return true;
    }
  }).argv;

//exporto mi constante para que pueda ser utilizada en cualquier clase que la requiera
module.exports = argv;

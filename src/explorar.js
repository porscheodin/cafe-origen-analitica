const ventas = require("./datos");


console.log("longitud: ", ventas.length);
console.log("primer: ", ventas[0]);
console.log("ultimo: ", ventas.at(-1));
console.log("producto: ", ventas[4].producto);
console.table(ventas);


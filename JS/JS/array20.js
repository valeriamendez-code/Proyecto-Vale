const palabras = ["sol", "computadora", "mar", "programación", "luz", "televisor"];

let resultado = "";

for (let palabra of palabras) {
  if (palabra.length >= 5) {
    resultado += palabra + " / ";
  }
}

// Quitar el último " / "
resultado = resultado.slice(0, -3);

console.log(resultado);

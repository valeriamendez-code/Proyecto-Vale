// Crear array vacío
let compras = [];

// Agregar 4 productos
compras.push("Pan");
compras.push("Leche");
compras.push("Huevos");
compras.push("Queso");

// a) Mostrar cuántos productos hay
console.log("Cantidad de productos:", compras.length);

// b) Eliminar el último producto y mostrar cuál fue
let eliminado = compras.pop();
console.log("Producto eliminado:", eliminado);

// c) Mostrar la lista final con separador " | "
console.log("Lista final:", compras.join(" | "));
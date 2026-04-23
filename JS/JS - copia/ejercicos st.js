/*ejercicio 1*/

10 === 10;
"5" === 5;
8 !== 8;
15 >= 20;
"hola" !== "chau";
0 === false;

/*ejercicio 2*/

let edad = 25;

if (edad < 5) {
  console.log("Entrada gratuita");
} else if (edad <= 11) {
  console.log("Entrada infantil");
} else if (edad <= 64) {
  console.log("Entrada general");
} else {
  console.log("Entrada jubilado");
}


/*ejercicio 3*/

let mes = 4;

if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Verano");
} else if (mes === 3 || mes === 4 || mes === 5) {
  console.log("Otoño");
} else if (mes === 6 || mes === 7 || mes === 8) {
  console.log("Invierno");
} else if (mes === 9 || mes === 10 || mes === 11) {
  console.log("Primavera");
} else {
  console.log("Mes inválido");
}

/* ejercicio 4*/

let num1 = 10;
let num2 = 2;
let operacion = "sumar";

if (operacion === "sumar") {
  console.log(num1 + num2);
} else if (operacion === "restar") {
  console.log(num1 - num2);
} else if (operacion === "multiplicar") {
  console.log(num1 * num2);
} else if (operacion === "dividir") {
  if (num2 === 0) {
    console.log("no se puede dividir");
  } else {
    console.log(num1 / num2);
  }
} else {
  console.log("Operación inválida");
}

/*ejercicio 5*/

const nombre = "";
if (nombre) {
  console.log("Hay nombre");
} else {
  console.log("No hay nombre");
}
//"no hay nombre" falsy


const lista = [];
if (lista) {
  console.log("La lista existe");
} else {
  console.log("No existe");
}
//"la lista existe" truthy

const cantidad = 0;
if (cantidad) {
  console.log("Hay items");
} else {
  console.log("No hay items");
}
//"no hay item" falsy 

const mensaje = "0";
if (mensaje) {
  console.log("Hay mensaje");
} else {
  console.log("No hay mensaje");
}
//"hay mensaje" trthy


/*ejercicio 6*/

let nombreUsuario = "Valeria";
let email = "vale@mail.com";
let edad = 20;

if (nombreUsuario && email && edad >= 18) {
  console.log("Registro válido");
} else {
  console.log("Datos incompletos o inválidos");
}

//ejercicio 7

let precio = 300;
let tieneTarjetaSocio = true;

if (precio > 200 && tieneTarjetaSocio) {
  console.log(precio * 0.7); 
} else if (precio > 500 || tieneTarjetaSocio) {
  console.log(precio * 0.8); 
} else {
  console.log(precio);}

  //ejercicio 8 opcio a

  for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
//opcion b

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}




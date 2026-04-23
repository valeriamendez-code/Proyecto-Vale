for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let  suma = 0;

for (let i = 1; i <= 100; i++) {
  suma = suma + i;
}

console.log(suma)

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

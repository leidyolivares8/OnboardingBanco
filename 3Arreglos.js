let arrayUno = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let arrayDos = [1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log(arrayUno);
console.log(arrayDos);

for (let i = 0; i < arrayUno.length; i++) {

    let valorUno = arrayUno[i];
    let valorDos = arrayDos[i];

    let suma = valorUno + valorDos;
    let multiplica = valorUno * valorDos;

    console.log(valorUno + " + " + valorDos + " = " + suma);
    console.log(valorUno + " * " + valorDos + " = " + multiplica);
    console.log("--------------------------------------------------");

}
let horasSemanalTrabajador = 53;
let valorHoraOrdinario = 0;
let valorHoraExtra = 0;

for (let i = 1; i <= horasSemanalTrabajador; i++) {

    if (i <= 40) {
        valorHoraOrdinario = valorHoraOrdinario + 265;
    } else {
        valorHoraExtra = valorHoraExtra + 350;
    }
}
console.log("El total a pargar por horas laborales normal (40hrs) es de :" + valorHoraOrdinario);
console.log("El total a pagar por horas Extra 13 hrs es de:" + valorHoraExtra);
 class Persona { //padre, no se debe instanciar
     constructor(nombre, apellido, edad) {
         this.nombreper = nombre;
         this.apellidoper = apellido;
         this.edadper = edad
     }
     getDetalles() {
         return this.nombreper + " " + this.apellidoper + " de " + this.edadper + " años";
     }
 }
 class Empleado extends Persona { //hija, padre
     constructor(nombre, apellido, edad, tipo) {
         super(nombre, apellido, edad); // pasarle los parametros al constructor del padre
         this.tipoempleado = tipo;
     }
     getEmpleado() {
         let destipoEmpleado;
         if (this.tipoempleado == "S") {
             destipoEmpleado = "Sindicato";
         } else if (this.tipoempleado == "C") {
             destipoEmpleado = "Confianza";
         }
         return this.getDetalles() + " - " + this.tipoempleado + " pertenece a empleado de " + destipoEmpleado;
     }
 }
 class Nomina extends Empleado { //hija
     constructor(nombre, apellido, edad, tipo) {
         super(nombre, apellido, edad, tipo); // pasarle los parametros al constructor del padre
     }

     getCalcularNomina() {
         let random = Math.floor(Math.random() * (15 - 5) + 5);
         if (this.tipoempleado == "S") {
             let valorPagar = (random * 350) - (random * 350) * 0.1;
             return this.getEmpleado() + "con un sueldo de: $" + valorPagar + " por " + random + " días trabajados";
         } else if (this.tipoempleado == "C") {
             let valorPagar = (random * 500) - (random * 500) * 0.1;
             return this.getEmpleado() + " con un sueldo de: $" + valorPagar + " por " + random + " días trabajados";
         }
     }
 }

 // let persona = new Persona("Leidy", "Olivares", "33");
 // let empleado = new Empleado("Leidy", "Olivares", 10, "C");
 let nomina = new Nomina("María", "Carvajal", 33, "C");
 let nomina2 = new Nomina("Juan", "Almeira", 23, "C");
 let nomina3 = new Nomina("Dulce", "Salguero", 42, "C");
 console.log(nomina.getCalcularNomina());
 console.log(nomina2.getCalcularNomina());
 console.log(nomina3.getCalcularNomina());
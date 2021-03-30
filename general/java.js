console.log ("JavaScript Exercises");
//****Variables y Operadores*****/
//    a) Crear dos variables numéricas y utilizar el operador  
//    suma para guardar el valor de la suma de ambos números en una 3er variable */ 
var vasos, platos;
vasos = 20;
platos = 10;
var cantidadMercaderia = vasos + platos;
console.log(cantidadMercaderia);

//   b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var uno, dos;
uno = "Numer ";
dos = "Stock";
var mostrario = uno + dos; 
console.log(mostrario);

//   c) Crear dos variables de tipo String y sumar el largo de cada variable 
//(cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/
var nombre , apellido;
nombre = "Pablo ";
apellido = "Lopez";
var personal = nombre + apellido
var identidad = nombre.length + apellido.length;
console.log(personal, identidad);

//****Strings ****/
//    a) Crear una variable de tipo string con 
//al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase) */
var text;
text = "My name is Pablo Lopez";
var texttwo;
texttwo = text.toUpperCase(text);
console.log(texttwo);

//***  b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var termo;
termo = "Lack Bottle";
var res;
res = termo.substring(0,5);
console.log(termo);
console.log(res);

//***  c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var estado;
estado = "Status Bad";
var queEstado;
queEstado = estado.substring(7)
console.log(estado);
console.log(queEstado);

//**   d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
// en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var sentence = "the bottle is in good status"
var capitalized = sentence[0].toUpperCase() 
+ sentence.substring(1).toLowerCase();
console.log(capitalized);

//**   e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var space;
space = "the bottle is in bad status"
var blankspace;
blankspace = space.indexOf("bottle");
console.log(blankspace);

//**   f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra 
//de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
//toUpperCase, toLowerCase y el operador +). */
var words = "immaginary stocklist"
var capitalizedWords = words[0].toUpperCase() 
+ words.substring(1,10).toLowerCase()
+ words[11].toUpperCase() 
+ words.substring(12,20).toLowerCase()
console.log(capitalizedWords);

//**Arrays */
//**  a)Dado el siguiente array: 
//["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
// "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

//**   b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
var months;
console.log(months.sort());

//**   c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */
var months;
months.unshift("Months");
months.push("Year");
console.log(months);

//**   d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
var months;
months.shift();
months.pop();
console.log(months);

//**  e) Invertir el orden del array (utilizar reverse) */
var months;
console.log(months.reverse());

//*  f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */ 
var months;
console.log(months.join("-"));

//** g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months)
var specificmonths = months.slice(4,11);
console.log(specificmonths);

//** If else */
//**   a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor 
//o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
//y sino un alerta con el mensaje “Lower than 0,5” */
var newnumber = Math.random();
console.log(newnumber)
newnumber
if (newnumber >= 0.5)
	console.log ("Greater than 0.5");
else
	console.log("Lower than 0.5");

//**  b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//“Bebe” si la edad es menor a 2 años
//“Nino” si la edad es entre 2 y 12 años
//“Adolecente” si la edad es entre 13 y 19 años
//“Joven” si la edad está entre 20 y 30 años
//“Adulto” entre 31 y 60 años
//“Adulto mayor” entre 61 y 75 años
//“Anciano” si es mayor a 75 años*/ 
var age = 30;
if (age < 2) {
	console.log ("Bebe");
}else if ((age => 2) && (age <= 12)){
	console.log("Nino")
}else if ((age => 13) && (age <=19)){
	console.log("Adolecente")
}else if ((age => 20) && (age <= 30)){
	console.log("Joven")
}else if ((age =>31) && (age <=60)){
	console.log("Adulto")
}else if ((age =>61) && (age <=75)){
	console.log("Adulto mayor")
}else if (age > 75){
	console.log("Anciano")
}

//** For */
//  a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
//para mostrar una alerta utilizando cada una de las palabras.*/
var clothesArray = ["tshirt", "jumper", "skirt", "sweater", "jeans"];
for(i = 0; i < clothesArray.length; i++){
   console.log("Clothes")
}
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
uno = "Cantidad ";
dos = "Mercaderia";
var mostrario = uno + dos; 
console.log(mostrario);

//   c) Crear dos variables de tipo String y sumar el largo de cada variable 
//(cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/
var nombre , apellido
nombre = "Pablo ";
apellido = "Lopez";
var personal = nombre + apellido
var identidad = nombre.length + apellido.length;
console.log(personal, identidad);

//****Strings ****/
//    a) Crear una variable de tipo string con 
//al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase) */
var text
text = "Mi nombre es Pablo Lopez";
var texttwo
texttwo = text.toUpperCase(text)
console.log(texttwo)
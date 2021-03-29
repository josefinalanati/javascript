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



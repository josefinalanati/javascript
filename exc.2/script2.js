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

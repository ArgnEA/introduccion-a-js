// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const myName = `Emanuel`
const userName = prompt(`¿Cual es tu nombre?`);
const friendName = `Nick`
if (userName.toLowerCase() === myName.toLowerCase()) {
    console.log(`Hola, Tocayo! Yo también me llamo ${userName}`);    
}else if (userName.toLowerCase() === friendName.toLowerCase()) {
    console.log(`Hola, ${userName} te llamas igual que mi amigo`);
}else{
console.log(`Hola, ${userName}`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const myAge = 21;
const userAge = Number(prompt(`¿Cual es tu edad?`));
if (myAge === userAge) {
    console.log(`Tenemoos la misma edad!`);   
}else if(myAge < userAge){
    console.log(`Sos mayor que yo`);
}else if (myAge > userAge) {
    console.log(`Sos menor que yo`)   
} 

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

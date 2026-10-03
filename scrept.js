let nombre = prompt('Ingrese Su Nombre Completo: ');
let edad = Number(prompt('Ingrese Su Edad: '));
let correo = prompt('Ingrese Su Correo Electronico: ');

if (edad >= 15) {
    console.log('Tienes la edad correcta');
} else {
    console.log('Puedes entrar a la plataforma, pero con tu edad no podrás realizar ningún programa académico');
}

console.log('Hola', nombre, 'Te damos la bienvenida a AUNAR CALI/AUTONOMA, con', edad, 'años.');
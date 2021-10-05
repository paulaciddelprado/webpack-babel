"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suma = suma;
exports.saludar = saludar;

// export function suma (num1, num2) {
//     const resu_suma = num1 + num2
//     return resu_suma 
// }
// function resta (num1, num2) {
//     resta = num1 - num2
//     return resta
// }
// function multiplicacion (num1, num2) {
//     multiplicacion = num1 * num2
//     return multiplicacion
// }
// export function saludo(user_name) {
//     const saludar_usuario = Hola ${user_name}, buenos días
//     return saludar_usuario
//     }
// //export const saludo = "Hola, soy Paula, saludos desde el módulo";
// swal({
//     title: "Here's a title!",
//   });
function suma(a, b) {
  var resultado_suma = a + b;
  return resultado_suma;
}

function resta(a, b) {
  resultado_resta = a - b;
  return resultado_resta;
}

function multiplicacion(a, b) {
  resultado_mult = a * b;
  return resultado_mult;
}

function saludar(user_name) {
  var saludar_usuario = "Hola ".concat(user_name, ", buenos d\xEDas");
  return saludar_usuario;
}
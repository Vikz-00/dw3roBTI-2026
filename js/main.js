const miTitulo = document.querySelector("h1");
miTitulo.textContent  = "Hello word";
//  creacion de  variables
let  nombreUsuario = "Vikz";
let  num1 = 10;
let  num2 = 30;

 if (num1 > num2) {
    nombreUsuario  = "Nahuel";
 }else{
    nombreUsuario = "Ortega";
 }

miTitulo.textContent = "Usuario: " +  nombreUsuario;

//Funciones
const miTitulo2 = document.querySelector("h2")
function comparar(n1, n2){
    let resultado = n1 > n2;
    return resultado;
}


if (comparar(num1,num2)){
    miTitulo2.textContent =  "is  true!";
}



// Eventos
document.querySelector("html").onclick = function (){
    alert("Deja de Pincharme!");
}
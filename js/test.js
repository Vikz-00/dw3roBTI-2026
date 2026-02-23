//Ejercicio1 - Hallar   IVA 
let precioinicial = 100000;
let iva10 = 11;
let ivaresultado = precioinicial / iva10;
console.log("EL  IVA a pagar es:", ivaresultado);


const mostrarresultado =  document.getElementById('precioinicial');
const mostrarIVA = document.getElementById('ivaresultado');

mostrarresultado.textContent = precioinicial;
mostrarIVA.textContent = ivaresultado;
// ejercicio 2
let ladodelcuadrado = 40;
let areadelcuadrado = ladodelcuadrado * ladodelcuadrado;
let perimetrodelcuadrado = ladodelcuadrado *4;
console.log("EL  IVA a pagar es:", ivaresultado);


const lado =  document.getElementById('ladocuadrado');
const area = document.getElementById('areacuadrado');
const perimetro = document.getElementById('perimetrodelcuadrado');

//lado.textContent = "Lado:" + ladodelcuadrado;
//area.textContent = "El area es:" + areadelcuadrado;
//perimetro.textContent = "El perimetro es:" + perimetrodelcuadrado;

// Ejercicio 3
let UserName = prompt('What  is  your  name?');
alert('Hola ' + UserName);


// Ejercicio4 - promedio de 3  numeros  ingresados
let nume1 = prompt('Ingrese el  primer  numero')
let nume2 = prompt('Ingrese el  segundo  numero')
let nume3 = prompt('Ingrese el  tercer  numero')
let numeresultado  = (parseInt(nume1) + parseInt(nume2) + parseInt(nume3))/3

alert('El resultado es:' + numeresultado)

//Ejercicio 5

let kmre = prompt('Kilometros recorridos: ')
let ltcon = prompt('Litros consumidos: ')

let ltporkm = (parseFloat(ltcon) / parseFloat(kmre))
alert('Los  litros consumidos por kilometros  son: ' + ltporkm)

//Ejercicio 6 

let horainput = prompt('Ingrese la hora:  ');
let horatominuto = horainput * 60;
let minutotosegundo = horatominuto * 60;
alert(horainput + '  hora es igual a ' + minutotosegundo + ' segundos')

//Ejercicio 7 
let numIngresado = prompt('Ingresar numero: ');
let decenas = numIngresado / 10;
let unidades = numIngresado % 10;
alert ('El nro ingresado tiene ' + decenas + 'decenas\n' + 'Y  ' + unidades + ' unidades')
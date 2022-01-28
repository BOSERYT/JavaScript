var nombre = "JDFH";
var apellido = "Flores";
var tel = "7226628421";
var array=[nombre, apellido, tel];
var obj = {nombre, apellido};
console.log(array[1]);
console.log(obj.apellido);

function miprimerfuncion() {return 3;}

var myfunction = funtion(a,b)
 {
    return a+b;
}


function saludar (estudiante)
{
console.log('Hola ${estudiante}');
} 
saludaestuiante();

var n1 = 1;
var n2 = 2;

function suma(n1,n2){var resultado = n1+n2;
    return ("El resultado es" + resultado);
}
suma(5,4);
//Ejemplo De Scope Global
var minombre ="Danii";

function nombre (){
    minombre ="Juan";
    return minombre;
}

console.log(minombre);


//Ejemplo De Scope Local

var minombre ="Danii";

function nombre(){
var miapellido = "Hernandez";

}



//Como una funcion puede cambiar un scope

var minombre ="Danii"
function nombre(usuario){
    minombre=usuario;
    console.log(minombre);
}
nombre("Oscar");
console.log('Hola ${minombre}, como estas?');





function cuadrado(area){
return area*area;
}
cuadrado();


function triangulo(altura, base){
return base*altura/2;
}
triangulo(5,2)

function circulo (radio){
return 3.1416*(radio*radio);
}
circulo(5);

//hosting

var minombre = undefined;
undefined

/// se declara hasta arriba las variables cuando se hace hosting
console.log(minombre + "soy hosting");
VM631:1 undefinedsoy hosting
undefined
console.log(minombre + "Soy hosting");
VM696:1 undefinedsoy hosting
undefined
minombre = "diego";
'diego'
console.log(minombre +""+ "soy hosting");
VM875:1 diegosoy hosting
undefined



//Hoisting 

 //3
 hey();
 //1
 function hey (){
 
    console.log(minombre + " Soy Hosting");
}
 //2
var minombre = "Danii";
 //4
minombre="Danii"


//3
primero();
//1
function primero() {
    console.log("I miss u" + a);
}
//2
var a = "Lilo";
//4
a="Lilo"

primero();



hola();

function hola (){
    console.log(edad + " Años ");
}
var edad ="19";

edad="19"

// Coercion

var a=30;
var aa= 5 + "";

console.log(aa);

var b = [1,2];

var c = [2,3];

console.log(b,c);

//Coercion EXPLICITA
var B= "5";
console.log(B);
var entero = Number (B);
console.log(entero);

var A= 30;
console.log(A);
 var num= A.toString();
console.log(num);


var z = "10";
var suma = 10 + +z;
console.log(suma)

//True Or False



//Condionales


var edad = "20";
var verd = edad =20;
if(ver > 18){
    console.log("Puedes pasar");
}
else{
console.log("Eres Chavo");
}

var prom= "10";
var final= prom = 10;
if(final < 10){
    console.log("Eres Inteligente");
}
else{
    console.log("Eres re burro");
}

var estatura = "1.74";
var fin = estatura = parseFloat (1.74);
if (estatura > 1.70){
console.log("Tas Alto")
}
else{
    console.log("Eres un miniom")
}


//Operaadores 
var edad = 40;
edad ++;
edad += 2;
edad();

//switch

var numero = 2;
var resultado;
switch(numero){
 case 1:
     resultado= "numero es igual a 1"
     break;
     case 2:
         resultado = "numero es igual 10"
          break;
          default: 
          resultado = "Ninguno";
}

//loop
var estudiante = ["Itzel", "Sara", "Dali", "Fer"];
for (var i=0; i< estudiante.length; i++ )
{
    console.log(estudiante [i])
}


var estudiante = ["I","D","S","L"]
for (estudiante.length; i++)
{
function saludar(estudiante) 
    console.log("Hola" + {$estudiante});
}

//arrays

var frutas = [];
var frutas = ["Manzana", "Platano", "Cereza"]
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);

//push
//Añadir a un arreglo
var masfrutas =frutas.push("Uva");
console.log(frutas);

//pop
//Eliminar del arreglo indice el final
var ultimo =frutas.pop("Uva");
console.log(frutas);

//unshift
//Añade al inicio
var nuevalongitud = frutas.unshift("Uvas");
console.log(frutas);

//shift
//Elimina del inicio
var borrarfruta = frutas.shift("Manzana");
console.log(frutas);

//indexOf
//Nos da la posiscion del item
var posicion = frutas.indexOf("Uva");
console.log(frutas);











//Metodo map
//En los arreglos nos da algo en especifico











//Metodo Foreach
//Recorre un arreglo de manera general Muestra todos los datos y tipo de dato
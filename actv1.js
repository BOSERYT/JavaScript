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


var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
    ]
    
    // Metodos para recorrer arrays


// Metodo Filter
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 /* Menor o igual a 100 */
    });
    
    console.log(articulosFiltrados);


//Metodo map
//En los arreglos nos da algo en especifico

var nombreArticulos = articulos.map(function(articulo){
return articulo.nombre
});

console.log(nombreArticulos);

// Metodo Find
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
    });
    
    console.log(encuentraArticulos);
    
//Metodo Foreach
//Recorre un arreglo de manera general Muestra todos los datos y tipo de dato

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
    });

    // Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
    });
    
    console.log(articulosBaratos);
    
    // Metodo Every
    
    /* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
    
    var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
    });
    
    console.log(articulosBaratos);
    
    // Metodo Reduce
    /* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */
    
    var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual ;
    }, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
    
    console.log(costoTotal);
    
    // Metodo Includes
    
    var numeros = [1, 2, 3, 4, 5, 6];
    
    var incluyeNumero = numeros.includes(2);
    
    console.log(incluyeNumero);

//---------------------------------------------------------------------------------------------------------//

var TRABAJADORES = [
        { nombre: 'PEDRO', SUELDO: 3000 },
        { nombre: 'MIGUEL', SUELDO: 2500 },
        { nombre: 'MOY', SUELDO: 3200 },
        { nombre: 'JIMENA', SUELDO: 10000 },
        { nombre: 'SUSANA', SUELDO: 20000 },
        { nombre: 'LORENZO', SUELDO: 500 },
        { nombre: 'NIEVES', SUELDO: 1700 }
        ]

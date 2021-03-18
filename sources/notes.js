/* Método reduce() */
const suma = [10,20,30,40].reduce((a,b) => a + b  );
console.log(suma);

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
/* Métopdo apply */
const arr2 = [6, 89, 3, 45];
const maximus = Math.max(...arr2);
console.log(` maximus: ${maximus}`);


/* Asignación de desestructuración */
/* Las propiedades nuevas deben tener el mismo nombre */
const user = { names: 'John Doe', age: 34 };
const {names , age } = user;
console.log("name: " + names);
/* Para asignar un nuevo nombre se deben agregar : más el nuevo nombre */
const {names:newName , age:newAge } = user;
console.log("La nueva propiedad es newName: y el valor es el siguiente: " + newName);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
console.log("LOCAL_FORECAST: " );
console.log(LOCAL_FORECAST);

const {yesterday:{low:newLow,high:newHigh}} = LOCAL_FORECAST;

console.log("yesterday: " );
console.log(" newLow: "+newLow);
//console.log(newHigh);
/* asignación de desestructuración para asignar variables de matrices */
const [a, b,,c,...arrRest] = [1, 2, 3, 4, 5, 6,7,8,9,10];
//console.log(a, b,c);//1 , 2
//console.log(arrRest);

/* asignación de desestructuración para pasar un objeto como parámetros de una función */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 

console.log("result: "+ half(stats));
// Only change code above this line

/* Cadenas con literales de plantillas */
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is 
${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);
/* Ejemplo de aplicación de cadenas literales */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
 
 const failureItems = [];
  for(var i= 0; i < arr.length; i++){
    failureItems[i] = `<li class="text-warning">${arr[i]}</li>`;
  
  }
  // Only change code above this line
 
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log("failuresList");
console.log(failuresList);

/* sintaxis de la clase para definir una función de constructor */
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

/* Importar variables o funciones de optros archivos javascript */
/* import { add } from './math_functions.js'; */
/* export{add}; 
Utilice * para importar todo desde un archivo*/
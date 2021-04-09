/*Ejemplo al utlizar map y filter*/
const array = [1, 2, 3];

//console.log(array.map((i) => i + 5).filter((i) => i > 6));
//console.log(array.filter((i) => i > 1));
//console.log(array);

/* Ejemplo para utilizar splice */

const month = ["jan", "mar", "apr", "jun"];
console.log(month);
month.splice(1, 0, "feb");
console.log(month);

month.splice(3);
console.log(month);

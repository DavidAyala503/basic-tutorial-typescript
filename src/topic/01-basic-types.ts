//number, string, boolean, date, any

//#region - NUMBER
console.log('**************************');
console.log('**********NUMBER**********');
console.log('**************************');

const age = 15;
let weight = 70.5;
let weight2:number;

weight = 85;
weight2 = 74.5;

console.log(age);
console.log(weight);
console.log(weight2);

//Conversion a entero
const ageText = '31';
console.log('parseInt =>', parseInt(ageText));

//Conversion a decimal
const weightText = '70.5';
console.log('parseFloat =>', parseFloat(weightText));

//Conversion a numero
const weightText2 = '70.5';
console.log('Number =>', Number(weightText2))
//#endregion NUMBER

//#region STRING
console.log('**************************');
console.log('**********STRING**********');
console.log('**************************');

const name = 'David';
const lastName = 'Ayala';

console.log('Nombre:', name);
console.log('Apellido:', lastName);

console.log('--------Concatenar--------')
console.log(name + ' ' + lastName);
const fullName = `Template Literal (String Interpolation) => ${name} ${lastName}`;
console.log(fullName);
//#endregion STRING

//#region  BOOLEAN
console.log('***************************');
console.log('**********BOOLEAN**********');
console.log('***************************');

const useAngular: boolean = true;
const ComparacionExpression = 5 > 2;
const booleanText  = 'aabb';

console.log('Usas Angular?:', useAngular);
console.log('Comparacion mediante una expresion: 5 es mayor que 2? => ', ComparacionExpression);
console.log('Convertir texto a boolean usando la funcion Boolean => ',  Boolean(booleanText));
console.log('Convertir texto a boolean usando doble negacio !! => ', !!booleanText);
//#endregion BOOLEAN

//#region DATE
console.log('***************************');
console.log('***********DATE************');
console.log('***************************');

//30/11/2023
//20233011

const dateNow = new Date();
console.log('La fecha actual es: ', dateNow);
console.log('La fecha actual es: ', dateNow.getFullYear());
//#endregion DATE

//#region  ANY
console.log('***************************');
console.log('************ANY************');
console.log('***************************');

let valueAny: any = 'Hola Coders';
console.log('Valor ANY: ', valueAny);

valueAny = 5;
console.log('Valor ANY número: ', valueAny);
//#endregion ANY

export {};
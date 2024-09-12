console.log('*******************************');
console.log('************METHODS************');
console.log('*******************************');

function showMessage(): void{
    console.log('Hello Coders!');
}
showMessage();

const greet = (name: string): void => {
    console.log(`Hola ${name}`);
}
greet('Julio');

console.log('*******************************');
console.log('**********FUNCTIONS************');
console.log('*******************************');

function sum (a: number, b: number){
    return a + b;
}

const sum2 = (a: number, b: number) => {
    return a + b;
}

console.log('1) Suma de numeros: ', sum(5,6));
console.log('2) Suma de numeros: ', sum2(10,6));

//En caso de que los metodos o funciones rquieran multiples parametros, lo ideal es
//pasar todo por un objeto

//Esto es una mala practica ❌
const showStudenData = (
    name: string,
    lasName: string,
    age: number,
    career: string,
    university: string,
    cycle: number
) => {
    console.log('******Los datos del estudiante son los siguientes:******');
    console.log('Name: ', name);
    console.log('Apellidos: ', lasName),
    console.log('Edad:', age),
    console.log('Carrera: ', career),
    console.log('Universidad: ', university),
    console.log('Ciclo actual: ', cycle)
}

showStudenData('Hernesto', 'Torres Ayala', 24, 'Bellas Artes', 'Universidada Catolica del Peru', 5);

//Esto es una buena practica ✅
interface IPerson {
    name: string;
    lasName: string;
    age: number;
}

interface IStudent extends IPerson {
    career: string;
    university: string;
    cycle?: number;
}

const showStudenData2 = (data: IStudent) => {
    console.log('******Los datos del estudiante son los siguientes:******');
    console.log('Name: ', data.name);
    console.log('Apellidos: ', data.lasName),
    console.log('Edad:', data.age),
    console.log('Carrera: ', data.career),
    console.log('Universidad: ', data.university),
    console.log('Ciclo actual: ', data.cycle)
}

const studentPercy: IStudent = {
    name: 'David',
    lasName: 'Ayala',
    age: 22,
    career: 'Ingenieria en Sistemas y Computación',
    university: 'Universidad Tecnoogica de El Salvador',
    cycle: 5,
};

showStudenData2(studentPercy);

export {};
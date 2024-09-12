//INTERFACES
interface IPerson{
    name:string;
    lastName:string;
    age: number;
}

interface IStudent extends IPerson{
    career: string;
    university: string;
}

const juan:IPerson = {
    name: 'Juan',
    lastName: 'Soto Grado',
    age: 42
}

const studenPercy: IStudent = {
    name: 'Percy',
    lastName: 'Garcia Mori',
    age: 24,
    career: 'Ingeniria en Sistemas',
    university: 'Universidad Tecnologica de El Salvador',
}



console.log('Datos de Juan: ', juan);
console.log('Datos de Percy: ', studenPercy);
console.log('Edad de Percy: ', studenPercy.age);

//OBJECTS

export {};
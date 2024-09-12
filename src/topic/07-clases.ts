import { IAction } from "./utils/actions.interface";

//Clase Persona 
class Person {
    public name: string;
    public lastName: string;
    private _age: number;
    protected _fullName: string;

    constructor(name:string, lastName:string, _age:number){
        this.name = name;
        this.lastName = lastName;
        this._age = _age;
        this._fullName = `${this.name} ${this.lastName}`;
    }

    walk(): void{
        console.log(`${this.name} ${this.lastName} esta caminando...`);

    }
    talk(): void{
        console.log(`${this.name} ${this.lastName} esta hablando: "Nací en el año ${this._yearBirth()}"...`);
    }

    //funcion privada para calcular el año de nacimeinto
    private _yearBirth(){
        const currentDate = new Date();
        const yearBirth = currentDate.getFullYear() - this._age;
        return yearBirth;
    }
}

const juan = new Person('David', 'Ayala', 22);
console.log('Instancia (Person) "JUAN": ', juan);

juan.walk();
juan.talk();

//Clase Astronauta que hereda propiedades de la clase Person y tiene sus propias propiedades tambien
class Astronauta extends Person implements IAction{
    numberMasterDegress: number;
    constructor(name:string, lastName:string, _age:number, numberMasterDegress:number){
        super(name, lastName, _age);
        this.numberMasterDegress = numberMasterDegress;
    }
    pilotShip(): void {
        console.log(`${this.name} ${this.lastName} tiene permoiso para pilotear la nave 🚀.`);
    }

    getFullName(){
        return this._fullName;
    }
}

console.log('*************************************');
console.log('**DATOS DEL POSTULANTE A ASTRONAUTA**');
console.log('*************************************');

const astronauta = new Astronauta('Jhon', 'Connor', 45, 16);
const astronauta2 = new Astronauta('Maria', 'Torres', 33, 12);

console.log('Datos del Astronauta:', astronauta);
console.log('Numero de Maestrias: ', astronauta.numberMasterDegress);
console.log('Nombres y Apellidos del Astronauta: ', astronauta.getFullName());
astronauta.pilotShip();

console.log('Datos del Astronauta:', astronauta2);
console.log('Numero de Maestrias: ', astronauta2.numberMasterDegress);
console.log('Nombres y Apellidos del Astronauta: ', astronauta2.getFullName());
astronauta2.pilotShip();

export {};
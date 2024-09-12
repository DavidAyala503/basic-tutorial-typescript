console.log('*******************************');
console.log('************OBJECTS************');
console.log('*******************************');

interface ICustomer {
    name: string;
    lasName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    }
}

const customer: ICustomer = {
    name: 'Melani',
    lasName: 'Figueroa Santos',
    email: 'mfigueroa@gmail.com',
    address: {description: 'Av. Huan Lacaros 128', city: 'Lima', country: 'Perú'}
};

const {name, lasName, address:{city}} = customer;

console.log('Nombre: ', name);
console.log('Apellidos: ', lasName);
console.log('Ciudad: ', city);

console.log('*******************************');
console.log('************ARRAYS*************');
console.log('*******************************');

const pokemons: string[] = ['Pikachu', 'Charizard', 'Chicorita'];

const [poke1, poke2] = pokemons;

console.log('Pokemon 1: ', poke1);
console.log('Pokemon 2: ', poke2);

const [, , poke3 = 'Valor por defecto'] = pokemons;

console.log('Pokemon 3: ', poke3);



export {};
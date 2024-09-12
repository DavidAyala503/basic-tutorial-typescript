const elements = [2, 'hola', false, {name: 'Julio'}];
console.log('Elememtos: ', elements);

const messages: string[] = ['Hello', 'Coders'];
console.log(messages);

//array de objetos
interface IPet {
    name: string;
    age: string;
    species: string;
    isFamale: boolean;
    vaccines: string[];
}

const petFirulay: IPet = {
    name: 'Firulay',
    age: '15 años',
    species: 'Perro',
    isFamale: false,
    vaccines: ['Rabia']
};

const petKitty: IPet = {
    name: 'Kitty',
    age: '8 años',
    species: 'Gato',
    isFamale: true,
    vaccines: ['Rabia', 'Distemper']
};

const petPaula: IPet = {
    name: 'Paula',
    age: '8 años',
    species: 'Loro',
    isFamale: true,
    vaccines: ['Rabia']
};

const pets: IPet[] = [petFirulay, petKitty, petPaula];
console.log('Informacion de las mascotas: ', pets);

const petsFamele = pets.filter((pet) => {
    return pet.isFamale;
})

console.log('Mascotas Hembras: ', petsFamele);

export {};
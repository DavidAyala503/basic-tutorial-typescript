import { ICustomer } from "./utils/customer.interface";

const array1 = [1, 2, 5, 9, 1];
const array2 = ['a', 'b', 'c'];

/*const getFirtsItemNumber = (array: number[]) => {
    return array[0];
}

const getFirtsItemString = (array: string[]) => {
    return array[0];
}

console.log(getFirtsItemNumber(array1));
console.log(getFirtsItemString(array2));*/

const getFirtsItem = <T>(array: T[]) =>{
    return array[0];
}

console.log('First Number: ', getFirtsItem(array1));
console.log('First String: ', getFirtsItem(array2));

interface IResponse <T=void> {
    code: string;
    message: string;
    data?: T;
}

const customer: ICustomer = {
    name: 'Dina',
    lastName: 'Boluarte',
    email: 'dina@gmail.com',
    address: {description: 'Tomas Valle, Jr Ayacucho', city: 'Arequipa', country: 'Perú'}
};

const responseObject: IResponse<ICustomer> = {code: 'INF0001', message: 'Sin errores al procesar', data: customer};

const responseArray: IResponse<ICustomer[]> = {
    code: 'INF0001',
    message: 'Sien errores al procesar',
    data: [customer, customer]
}
    
const responseOther: IResponse<boolean> = {code: 'INF0001', message: 'Sin errores al procesar', data: false};
const responseOther2: IResponse = {code: 'INF0001', message: 'Sin errores al procesar'};
const responseOther3: IResponse = {code: 'INF0001', message: 'Sin errores al procesar'};

console.log('Response Object: ', responseObject);
console.log('Response Array: ', responseArray);
console.log('Response Other: ', responseOther);
console.log('Response Other2: ', responseOther2);
console.log('Response Other2: ', responseOther3);

export {};
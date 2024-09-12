import { ICustomer, showCustomerData } from "./utils/customer.interface";

const customer : ICustomer = {
    name : 'Dina',
    lastName: 'Bulevard Garcia',
    email: 'dina@gmail.com',
    address: {description: 'Tomas Valle, Jr Ayucucho', city: 'Arequipa', country: 'Perú'}
};

showCustomerData(customer);

export {};
export interface ICustomer {
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    };
}

export const showCustomerData = (customer: ICustomer) => {
    console.log('*****************************');
    console.log('******DATOS DEL CLIENTE******');
    console.log('*****************************');

    const {
        name,
        lastName,
        email,
        address: {description, city, country}
    } = customer;

    console.log('Nombres: ', name);
    console.log('Apellidos: ', lastName);
    console.log('Email: ', email);
    console.log('----------DIRECCION----------');
    console.log('Direccion: ', description);
    console.log('Ciudad: ', city);
    console.log('Pais: ', country);
};
(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id:string ): string;

    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client:Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: '67Kt',
            city: 'Ciudad',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    }


    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 343,
            zip: 'FG&/'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    }




})
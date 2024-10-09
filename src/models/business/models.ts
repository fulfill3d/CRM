export class Location {
    location_id: number;
    address_id: number;
    created_at: string;
    updated_at: string;
    location_name: string;
    latitude: number;
    longitude: number;
    address_first_name: string;
    address_last_name: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;

    constructor(data: any) {
        this.location_id = data.location_id;
        this.address_id = data.address_id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.location_name = data.location_name;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.address_first_name = data.address_first_name;
        this.address_last_name = data.address_last_name;
        this.street1 = data.street1;
        this.street2 = data.street2 || ''; // Optional
        this.city = data.city;
        this.state = data.state;
        this.country = data.country;
        this.zip_code = data.zip_code;
    }
}

export class Employee {
    id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
    created_at: string;
    updated_at: string;

    constructor(data: any) {
        this.id = data.id;
        this.nick_name = data.nick_name;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.e_mail = data.e_mail;
        this.phone = data.phone;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

export class Address {
    id: number | null;
    locationName: string;
    firstName: string;
    lastName: string;
    street1: string;
    street2: string | null;
    city: string;
    state: string;
    country: string;
    zipCode: string;

    constructor(
        id: number | null,
        locationName: string,
        firstName: string,
        lastName: string,
        street1: string,
        street2: string | null,
        city: string,
        state: string,
        country: string,
        zipCode: string
    ) {
        this.id = id;
        this.locationName = locationName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
    }

    // Static method to create an Address from a JSON object
    static fromJSON(data: any): Address {
        const id = data.id || null;
        const locationName = data.location_name;
        const firstName = data.first_name;
        const lastName = data.last_name;
        const street1 = data.street1;
        const street2 = data.street2 || null; // handle optional field
        const city = data.city;
        const state = data.state;
        const country = data.country;
        const zipCode = data.zip_code;

        return new Address(
            id,
            locationName,
            firstName,
            lastName,
            street1,
            street2,
            city,
            state,
            country,
            zipCode
        );
    }

    // Validation method to ensure the integrity of the Address fields
    validate(): string[] {
        const errors: string[] = [];

        // Validate required fields
        if (!this.firstName || this.firstName.trim().length === 0) {
            errors.push("First name is required.");
        }

        if (!this.lastName || this.lastName.trim().length === 0) {
            errors.push("Last name is required.");
        }

        if (!this.street1 || this.street1.trim().length === 0) {
            errors.push("Street1 is required.");
        }

        if (!this.city || this.city.trim().length === 0) {
            errors.push("City is required.");
        }

        // Validate state (assuming 2 characters for US states)
        if (!this.state || this.state.length !== 2) {
            errors.push("State must be 2 characters.");
        }

        // Validate country (assuming 2 characters, e.g., US, CA, GB)
        if (!this.country || this.country.length !== 2) {
            errors.push("Country must be 2 characters.");
        }

        // Validate zip code (non-empty)
        if (!this.zipCode || this.zipCode.trim().length === 0) {
            errors.push("Zip code is required.");
        }

        return errors;
    }
}



export class Store {
    id: number | null;
    name: string;
    description: string;
    address: Address | null;
    created_at: string;
    updated_at: string;
    location: Location | null;
    employees: Employee[];

    constructor(
        id: number | null,
        name: string,
        description: string,
        address: Address | null,
        created_at: string,
        updated_at: string,
        location: Location | null,
        employees: Employee[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.location = location;
        this.employees = employees;
    }

    // Static method to handle the construction from JSON
    static fromJSON(data: any): Store {
        const id = data.id || null;
        const name = data.name;
        const address = data.address ? Address.fromJSON(data.address) : null;
        const description = data.description;
        const created_at = data.created_at;
        const updated_at = data.updated_at;
        const location = data.location ? new Location(data.location) : null;
        const employees = data.employees ? data.employees.map((employee: any) => new Employee(employee)) : [];

        // Use the updated constructor
        return new Store(id, name, description, address, created_at, updated_at, location, employees);
    }
}


export class SubCategory {
    id: number;
    name: string;
    description: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
    }
}

export class Category {
    id: number;
    name: string;
    description: string;
    sub_categories: SubCategory[];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.sub_categories = data.sub_categories ? data.sub_categories.map((sub: any) => new SubCategory(sub)) : [];
    }
}

export class Service {
    id: number;
    duration: number;
    price: number;
    name: string;
    description: string;
    categories: Category[];

    constructor(data: any) {
        this.id = data.id;
        this.duration = data.duration;
        this.price = data.price;
        this.name = data.name;
        this.description = data.description;
        this.categories = data.categories ? data.categories.map((cat: any) => new Category(cat)) : [];
    }
}

export class StoreService {
    store_id: number;
    services: Service[];

    constructor(data: any) {
        this.store_id = data.store_id;
        this.services = data.services ? data.services.map((service: any) => new Service(service)) : [];
    }
}

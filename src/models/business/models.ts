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
    id: number | null;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
    created_at: string | null;
    updated_at: string | null;

    constructor(
        id: number | null,
        nick_name: string,
        first_name: string,
        last_name: string,
        e_mail: string,
        phone: string,
        created_at: string | null,
        updated_at: string | null
    ) {
        this.id = id;
        this.nick_name = nick_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    // Static method to handle construction from JSON
    static fromJSON(data: any): Employee {
        return new Employee(
            data.id,
            data.nick_name,
            data.first_name,
            data.last_name,
            data.e_mail,
            data.phone,
            data.created_at,
            data.updated_at
        );
    }

    // Validation method
    validate(): string[] {
        const errors: string[] = [];

        // Validate nick_name
        if (!this.nick_name || this.nick_name.trim().length === 0) {
            errors.push("NickName is required.");
        } else if (this.nick_name.trim().length > 255) {
            errors.push("NickName must be less than 255 characters.");
        }

        // Validate first_name
        if (!this.first_name || this.first_name.trim().length === 0) {
            errors.push("FirstName is required.");
        } else if (this.first_name.trim().length > 255) {
            errors.push("FirstName must be less than 255 characters.");
        }

        // Validate last_name
        if (!this.last_name || this.last_name.trim().length === 0) {
            errors.push("LastName is required.");
        } else if (this.last_name.trim().length > 255) {
            errors.push("LastName must be less than 255 characters.");
        }

        // Validate e_mail
        if (!this.e_mail || this.e_mail.trim().length === 0) {
            errors.push("Email is required.");
        } else if (this.e_mail.trim().length > 255) {
            errors.push("Email must be less than 255 characters.");
        }

        // Validate phone
        if (!this.phone || this.phone.trim().length === 0) {
            errors.push("Phone is required.");
        } else if (this.phone.trim().length > 25) {
            errors.push("Phone must be less than 25 characters.");
        }

        return errors;
    }
}

export class Address {
    id: number | null;
    location_name: string;
    first_name: string;
    last_name: string;
    street_1: string;
    street_2: string | null;
    city: string;
    state: string;
    country: string;
    zip_code: string;

    constructor(
        id: number | null,
        location_name: string,
        first_name: string,
        last_name: string,
        street_1: string,
        street_2: string | null,
        city: string,
        state: string,
        country: string,
        zip_code: string
    ) {
        this.id = id;
        this.location_name = location_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.street_1 = street_1;
        this.street_2 = street_2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zip_code = zip_code;
    }

    // Static method to create an Address from a JSON object
    static fromJSON(data: any): Address {
        const id = data.id || null;
        const location_name = data.location_name;
        const first_name = data.first_name;
        const last_name = data.last_name;
        const street_1 = data.street_1;
        const street_2 = data.street_2 || null; // handle optional field
        const city = data.city;
        const state = data.state;
        const country = data.country;
        const zip_code = data.zip_code;

        return new Address(
            id,
            location_name,
            first_name,
            last_name,
            street_1,
            street_2,
            city,
            state,
            country,
            zip_code
        );
    }

    // Validation method to ensure the integrity of the Address fields
    validate(): string[] {
        const errors: string[] = [];

        // Validate required fields
        if (!this.first_name || this.first_name.trim().length === 0) {
            errors.push("First name is required.");
        }

        if (!this.last_name || this.last_name.trim().length === 0) {
            errors.push("Last name is required.");
        }

        if (!this.street_1 || this.street_1.trim().length === 0) {
            errors.push("Street 1 is required.");
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
        if (!this.zip_code || this.zip_code.trim().length === 0) {
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
    created_at: string | null;
    updated_at: string | null;
    location: Location | null;
    employees: Employee[];

    constructor(
        id: number | null,
        name: string,
        description: string,
        address: Address | null,
        created_at: string | null,
        updated_at: string | null,
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
        const created_at = data.created_at || null;
        const updated_at = data.updated_at || null;
        const location = data.location ? new Location(data.location) : null;
        const employees = data.employees ? data.employees.map((employee: any) => Employee.fromJSON(employee)) : [];

        // Use the updated constructor
        return new Store(id, name, description, address, created_at, updated_at, location, employees);
    }
}


export class SubCategory {
    id: number;
    name: string;
    description: string;

    constructor(
        id: number,
        name: string,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fromJSON(data: any): SubCategory {

        return new SubCategory(
            data.id,
            data.name,
            data.description,
        );
    }
}

export class Category {
    id: number;
    name: string;
    description: string;

    constructor(
        id: number,
        name: string,
        description: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fromJSON(data: any): Category{
        const id = data.id;
        const name = data.name;
        const description = data.description;

        return new Category(
            id,
            name,
            description
        )
    }
}

export class Service {
    id: number | null;
    duration: number;
    price: number;
    name: string;
    description: string;
    categories: Category[];
    sub_categories: SubCategory[];

    constructor(
        id: number | null,
        duration: number,
        price: number,
        name: string,
        description: string,
        categories: Category[],
        sub_categories: SubCategory[]
    ) {
        this.id = id;
        this.duration = duration;
        this.price = price;
        this.name = name;
        this.description = description;
        this.categories = categories;
        this.sub_categories = sub_categories;
    }

    static fromJSON(data: any): Service {
        const id = data.id;
        const duration = data.duration;
        const price = data.price;
        const name = data.name;
        const description = data.description;
        const categories = data.categories ? data.categories.map((category: any) => Category.fromJSON(category)) : [];
        const sub_categories = data.sub_categories ? data.sub_categories.map((sub: any) => SubCategory.fromJSON(sub)) : [];

        return new Service(
            id,
            duration,
            price,
            name,
            description,
            categories,
            sub_categories
        )
    }
}

export class StoreService {
    store_id: number;
    services: Service[];

    constructor(data: any) {
        this.store_id = data.store_id;
        this.services = data.services ? data.services.map((service: any) => Service.fromJSON(service)) : [];
    }
}

export class ServiceRequest {
    id: number | null;
    duration: number;
    price: number;
    name: string;
    description: string;
    categories: number[];
    sub_categories: number[];

    constructor(
        id: number | null,
        duration: number,
        price: number,
        name: string,
        description: string,
        categories: number[],
        sub_categories: number[]
    ) {
        this.id = id;
        this.duration = duration;
        this.price = price;
        this.name = name;
        this.description = description;
        this.categories = categories;
        this.sub_categories = sub_categories;
    }

    static fromService(service: Service): ServiceRequest {
        const categories = service.categories.map((cat) => cat.id);
        const sub_categories = service.sub_categories.map((sub) => sub.id);

        return new ServiceRequest(
            service.id,
            service.duration,
            service.price,
            service.name,
            service.description,
            categories,
            sub_categories
        )
    }

    validate(): string[] {
        const errors: string[] = [];

        // Validate required fields
        if (!this.name || this.name.trim().length === 0) {
            errors.push("Service name is required.");
        }

        if (!this.description || this.description.trim().length === 0) {
            errors.push("Description is required.");
        }

        // Validate duration (must be greater than 0)
        if (this.duration <= 0) {
            errors.push("Duration must be greater than zero.");
        }

        // Validate price (must be greater than 0)
        if (this.price <= 0) {
            errors.push("Price must be greater than zero.");
        }

        // Validate categories (must have at least one)
        if (!this.categories || this.categories.length === 0) {
            errors.push("At least one category is required.");
        }

        // Validate categories (must have at least one)
        if (!this.sub_categories || this.sub_categories.length === 0) {
            errors.push("At least one sub_category is required.");
        }

        return errors;
    }
}

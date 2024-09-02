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

export class Store {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    location: Location | null;
    employees: Employee[];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.location = data.location ? new Location(data.location) : null;
        this.employees = data.employees ? data.employees.map((employee: any) => new Employee(employee)) : [];
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

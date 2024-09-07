export class AppointmentAddress {
    location_lat: number;
    location_lon: number;
    address_street1: string;
    address_street2?: string;
    address_city: string;
    address_state: string;
    address_country: string;
    address_zip_code: string;

    constructor(data: any) {
        this.location_lat = data.location_lat;
        this.location_lon = data.location_lon;
        this.address_street1 = data.address_street1;
        this.address_street2 = data.address_street2 || '';  // Optional field
        this.address_city = data.address_city;
        this.address_state = data.address_state;
        this.address_country = data.address_country;
        this.address_zip_code = data.address_zip_code;
    }
}

export class AppointmentService {
    service_id: number;
    service_duration: number;
    service_price: number;
    service_currency: string;
    service_name: string;
    service_description: string;

    constructor(data: any) {
        this.service_id = data.service_id;
        this.service_duration = data.service_duration;
        this.service_price = data.service_price;
        this.service_currency = data.service_currency;
        this.service_name = data.service_name;
        this.service_description = data.service_description;
    }
}

export class Appointment {
    appointment_id: number;
    appointment_notes: string;
    appointment_start_date: string;
    appointment_status: number;
    appointment_address: AppointmentAddress;
    appointment_service: AppointmentService;

    constructor(data: any) {
        this.appointment_id = data.appointment_id;
        this.appointment_notes = data.appointment_notes;
        this.appointment_start_date = data.appointment_start_date;
        this.appointment_status = data.appointment_status;
        this.appointment_address = new AppointmentAddress(data.appointment_address);
        this.appointment_service = new AppointmentService(data.appointment_service);
    }
}

export class ServiceSubCategory {
    id: number;
    name: string;
    description: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
    }
}

export class ServiceCategory {
    id: number;
    name: string;
    description: string;
    sub_categories: ServiceSubCategory[];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.sub_categories = data.sub_categories
            ? data.sub_categories.map((sub: any) => new ServiceSubCategory(sub))
            : [];
    }
}

export class Service {
    id: number;
    duration: number;
    price: number;
    name: string;
    description: string;
    categories: ServiceCategory[];

    constructor(data: any) {
        this.id = data.id;
        this.duration = data.duration;
        this.price = data.price;
        this.name = data.name;
        this.description = data.description;
        this.categories = data.categories
            ? data.categories.map((cat: any) => new ServiceCategory(cat))
            : [];
    }
}

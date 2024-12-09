import {HttpMethod} from "@/services/common/http-request";

interface Endpoint {
    Uri: string;
    Method: HttpMethod;
}

export const BusinessAppointment = {
    GetAppointments: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_APPOINTMENT_BASE_URL}/api/get/${storeId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    CancelAppointment: (appointmentId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_APPOINTMENT_BASE_URL}/api/cancel/${appointmentId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint
}

export const BusinessEmployee = {
    GetEmployees: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_EMPLOYEE_BASE_URL}/api/${storeId}/get-all`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    AddEmployee: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_EMPLOYEE_BASE_URL}/api/${storeId}/add`,
        Method: HttpMethod.POST,
    }) as Endpoint,
    EditEmployee: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_EMPLOYEE_BASE_URL}/api/edit`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    DeleteEmployee: (employeeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_EMPLOYEE_BASE_URL}/api/delete/${employeeId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint
}

export const BusinessService = {
    GetServiceCategories: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL}/api/category`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetServices: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL}/api/get/${storeId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    AddServices: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL}/api/add/${storeId}`,
        Method: HttpMethod.POST,
    }) as Endpoint,
    EditService: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL}/api/edit`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    DeleteService: (serviceId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL}/api/delete/${serviceId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint
}

export const BusinessStore = {
    GetStores: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL}/api/get-all`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetStore: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL}/api/get/${storeId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    AddStore: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL}/api/add`,
        Method: HttpMethod.POST,
    } as Endpoint,
    EditStore: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL}/api/edit`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    DeleteStore: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL}/api/delete/${storeId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint
}

export const ClientAppointment = {
    GetAppointments: {
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL}/api/appointment/get-all`,
        Method: HttpMethod.GET,
    } as Endpoint,
    SetAppointment: {
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL}/api/appointment/set`,
        Method: HttpMethod.POST,
    } as Endpoint,
    UpdateAppointment: {
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL}/api/appointment/update`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    CancelAppointment: (appointmentId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL}/api/appointment/cancel/${appointmentId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint,
}

export const ClientService = {
    GetServices: {
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_SERVICE_BASE_URL}/api/services/get-all?zipCode=94121&radius=50000`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetService: (serviceId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_SERVICE_BASE_URL}/api/services/get/${serviceId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
}

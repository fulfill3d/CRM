import {HttpMethod} from "@/hooks/common/use-http";

interface Endpoint {
    Uri: string;
    Method: HttpMethod;
}

export const BusinessManagement = {
    GetStores: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/store/get-all`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetStore: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/store/get/${storeId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    AddStore: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/store/add`,
        Method: HttpMethod.POST,
    } as Endpoint,
    EditStore: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/store/edit`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    DeleteStore: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/store/delete/${storeId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint,
    GetEmployees: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/employee/get-all`,
        Method: HttpMethod.GET,
    } as Endpoint,
    AddEmployee: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/employee/add/${storeId}`,
        Method: HttpMethod.POST,
    }) as Endpoint,
    EditEmployee: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/employee/edit`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    DeleteEmployee: (employeeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/employee/delete/${employeeId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint,
    GetServiceCategories: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/service/category/get`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetServices: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/service/${storeId}/get`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    AddServices: (storeId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/service/${storeId}/add`,
        Method: HttpMethod.POST,
    }) as Endpoint,
    EditService: {
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/service/edit`,
        Method: HttpMethod.GET,
    } as Endpoint,
    DeleteService: (serviceId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/service/${serviceId}/delete`,
        Method: HttpMethod.POST,
    }) as Endpoint,
};

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
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL}/api/appointment/set`,
        Method: HttpMethod.PATCH,
    } as Endpoint,
    CancelAppointment: (appointmentId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_BUSINESS_MANAGEMENT_BASE_URL}/api/appointment/cancel/${appointmentId}`,
        Method: HttpMethod.DELETE,
    }) as Endpoint,
}

export const ClientService = {
    GetServices: {
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_SERVICE_BASE_URL}/api/services/get-all`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetService: (serviceId: number): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_CLIENT_SERVICE_BASE_URL}/api/services/get/${serviceId}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
}

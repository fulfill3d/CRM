import {HttpMethod} from "@/types/common/http-method";

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

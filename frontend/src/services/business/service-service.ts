import {httpRequest} from "@/services/common/http-request";
import {BusinessService} from "@/utils/endpoints";
import {Service, ServiceRequest} from "@/models/business/models";

export const getServiceCategories = async (accessToken: string) => {}

export const getStoreServices = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessService.GetServices(storeId).Uri,
            BusinessService.GetServices(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return response.map((service: any) => Service.fromJSON(service));
    } catch (error) {
        throw new Error("Failed to fetch store services.");
    }
};

export const addStoreService = async (service: ServiceRequest, storeId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessService.AddServices(storeId).Uri,
            BusinessService.AddServices(storeId).Method,
            service,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const editStoreService = async (service: ServiceRequest, accessToken: string) => {
    try {
        await httpRequest(
            BusinessService.EditService.Uri,
            BusinessService.EditService.Method,
            service,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const deleteStoreService = async (serviceId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessService.DeleteService(serviceId).Uri,
            BusinessService.DeleteService(serviceId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}
